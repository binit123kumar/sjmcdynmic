"""
compress_images.py
-------------------
SJMC website ke 'src/asset' folder ke andar sabhi images ko
automatically resize + compress + WebP convert karta hai.

Originals kabhi delete nahi hote — sabse pehle poora backup
'asset_backup_original/' folder mein bana diya jaata hai.

Chalane ka tareeka:
    1. Python install hona chahiye (python.org se, agar nahi hai)
    2. cmd/terminal mein:  pip install Pillow
    3. Is file ko project root mein rakhiye (D:\SJMC-Dynamic\Frontend\sjmc\)
    4. Chalayein:  python compress_images.py

Kya karta hai:
    - src/asset ke andar sab .jpg/.jpeg/.png/.bmp/.webp dhoondhta hai
    - Pehle unka poora backup 'asset_backup_original/' mein copy karta hai
    - Har image ko max 1600px tak resize karta hai (agar usse badi ho)
    - Sabko WebP format mein convert karta hai (quality 80 — dikhne mein
      farak nahi padta, size bahut kam ho jaata hai)
    - Purani .jpg/.png files ko WebP se replace kar deta hai
    - Aakhir mein pehle/baad ka total size report deta hai
"""

import os
import shutil
from pathlib import Path
from PIL import Image

# ---------------- SETTINGS — zaroorat ho toh yahan badal sakte hain ----------------
PROJECT_ROOT = Path(__file__).parent
ASSET_DIR = PROJECT_ROOT / "src" / "asset"
BACKUP_DIR = PROJECT_ROOT / "asset_backup_original"
MAX_DIMENSION = 1600          # px — website ko isse badi image kabhi nahi chahiye
WEBP_QUALITY = 80             # 0-100, 80 achha balance hai quality vs size ka
VALID_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".webp"}
# -------------------------------------------------------------------------------


def human_size(num_bytes):
    for unit in ["B", "KB", "MB", "GB"]:
        if num_bytes < 1024:
            return f"{num_bytes:.1f}{unit}"
        num_bytes /= 1024
    return f"{num_bytes:.1f}TB"


def backup_originals():
    if BACKUP_DIR.exists():
        print(f"Backup pehle se maujood hai: {BACKUP_DIR} (skip kar raha hoon)")
        return
    print(f"Backup bana raha hoon: {BACKUP_DIR} ...")
    shutil.copytree(ASSET_DIR, BACKUP_DIR)
    print("Backup complete.\n")


def compress_and_convert(file_path: Path):
    try:
        before_size = file_path.stat().st_size

        with Image.open(file_path) as img:
            # RGBA/P mode images (transparent PNGs) ko RGBA mein convert karo taaki WebP sahi bane
            if img.mode in ("P", "LA"):
                img = img.convert("RGBA")
            elif img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGB")

            # Resize agar zaroorat ho
            if img.width > MAX_DIMENSION or img.height > MAX_DIMENSION:
                img.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.LANCZOS)

            # Naya WebP path — same naam, extension .webp
            webp_path = file_path.with_suffix(".webp")
            img.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)

        after_size = webp_path.stat().st_size

        # Agar original .webp nahi tha, toh purani file (jpg/png) hata do
        if file_path.suffix.lower() != ".webp":
            file_path.unlink()

        saved_pct = ((before_size - after_size) / before_size * 100) if before_size else 0
        rel = webp_path.relative_to(ASSET_DIR)
        print(f"  {rel}  {human_size(before_size)} -> {human_size(after_size)}  (-{saved_pct:.0f}%)")

        return before_size, after_size

    except Exception as e:
        print(f"  FAILED: {file_path.name} -> {e}")
        return file_path.stat().st_size, file_path.stat().st_size


def main():
    if not ASSET_DIR.exists():
        print(f"ERROR: Yeh folder nahi mila: {ASSET_DIR}")
        print("Script ko project root (jahan 'src' folder hai) mein rakhiye.")
        return

    print(f"Scanning: {ASSET_DIR}\n")

    backup_originals()

    total_before = 0
    total_after = 0
    count = 0

    for root, _dirs, files in os.walk(ASSET_DIR):
        for fname in files:
            ext = Path(fname).suffix.lower()
            if ext in VALID_EXTENSIONS:
                fpath = Path(root) / fname
                b, a = compress_and_convert(fpath)
                total_before += b
                total_after += a
                count += 1

    print("\n=== Done ===")
    print(f"Files processed : {count}")
    print(f"Before total    : {human_size(total_before)}")
    print(f"After total     : {human_size(total_after)}")
    if total_before:
        print(f"Saved           : {human_size(total_before - total_after)} "
              f"({(total_before - total_after) / total_before * 100:.1f}%)")
    print(f"\nOriginal files ka backup yahan surakshit hai: {BACKUP_DIR}")
    print("Agar sab theek dikhe (website check karne ke baad), toh yeh backup folder delete kar sakte hain.")


if __name__ == "__main__":
    main()
