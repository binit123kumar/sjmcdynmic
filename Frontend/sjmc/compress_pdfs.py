from pathlib import Path
import shutil
import pymupdf

ROOT = Path(__file__).parent / "src"
BACKUP = Path(__file__).parent / "pdf_backup_original"

def human(size):
    if size < 1024:
        return f"{size:.1f} B"
    if size < 1024**2:
        return f"{size/1024:.1f} KB"
    if size < 1024**3:
        return f"{size/1024**2:.1f} MB"
    return f"{size/1024**3:.2f} GB"

def main():
    pdfs = list(ROOT.rglob("*.pdf"))

    if not pdfs:
        print("No PDF files found.")
        return

    print(f"PDF files found: {len(pdfs)}")
    BACKUP.mkdir(exist_ok=True)

    total_before = 0
    total_after = 0
    replaced = 0
    skipped = 0

    for pdf in pdfs:
        try:
            original_size = pdf.stat().st_size
            total_before += original_size

            # Preserve directory structure inside backup
            relative = pdf.relative_to(ROOT)
            backup_path = BACKUP / relative
            backup_path.parent.mkdir(parents=True, exist_ok=True)

            if not backup_path.exists():
                shutil.copy2(pdf, backup_path)

            temp = pdf.with_name(pdf.stem + "__compressed_temp.pdf")

            doc = pymupdf.open(pdf)

            # Garbage collection + deduplication + compression
            doc.save(
                temp,
                garbage=4,
                deflate=True,
                clean=True,
                deflate_images=True,
                deflate_fonts=True,
            )
            doc.close()

            compressed_size = temp.stat().st_size

            if compressed_size < original_size:
                shutil.move(str(temp), str(pdf))
                total_after += compressed_size
                replaced += 1
                saving = (1 - compressed_size / original_size) * 100
                print(
                    f"[OK] {relative} | "
                    f"{human(original_size)} -> {human(compressed_size)} "
                    f"(-{saving:.1f}%)"
                )
            else:
                temp.unlink(missing_ok=True)
                total_after += original_size
                skipped += 1
                print(
                    f"[SKIP] {relative} | "
                    f"compression did not reduce size "
                    f"({human(original_size)} -> {human(compressed_size)})"
                )

        except Exception as e:
            total_after += original_size if 'original_size' in locals() else 0
            print(f"[FAILED] {pdf} | {e}")

    print("\n=== PDF COMPRESSION COMPLETE ===")
    print(f"Files found      : {len(pdfs)}")
    print(f"Files replaced   : {replaced}")
    print(f"Files unchanged  : {skipped}")
    print(f"Before total     : {human(total_before)}")
    print(f"After total      : {human(total_after)}")

    if total_before:
        saved = total_before - total_after
        percent = saved / total_before * 100
        print(f"Saved            : {human(saved)} ({percent:.1f}%)")

    print(f"\nOriginal PDFs backup: {BACKUP}")

if __name__ == "__main__":
    main()
