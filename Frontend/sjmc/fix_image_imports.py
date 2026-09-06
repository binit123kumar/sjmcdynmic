"""
fix_image_imports.py
----------------------
compress_images.py chalane ke baad, saari images .jpg/.png/.bmp se
.webp ban gayi hain — is script ka kaam hai poore 'src' folder mein
saari .jsx/.js/.css files ke andar jo bhi import/url() image path
hai, uska extension bhi khud-ba-khud .webp kar dena.

Chalane ka tareeka:
    cd D:\SJMC-Dynamic\Frontend\sjmc
    python fix_image_imports.py

Yeh sirf IMPORT PATHS (jo quotes ke andar hain aur image extension
se khatam hote hain) badalta hai — baaki code kuch nahi chhuta.
Original .jsx/.js/.css files ka bhi backup 'src_backup_before_webp_fix/'
mein bana deta hai, safety ke liye.
"""

import os
import re
import shutil
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent
SRC_DIR = PROJECT_ROOT / "src"
BACKUP_DIR = PROJECT_ROOT / "src_backup_before_webp_fix"

# Jin file-types ke andar dhoondhna hai
SCAN_EXTENSIONS = {".jsx", ".js", ".css"}

# Jo purane image extensions ab .webp ban chuke hain
OLD_IMAGE_EXTENSIONS = r"(jpe?g|png|bmp)"

# Pattern: kisi bhi quote (' ya ") ke andar, ek path jo in extensions par khatam hoti hai
PATTERN = re.compile(r"(['\"][^'\"]*\.)" + OLD_IMAGE_EXTENSIONS + r"(['\"])", re.IGNORECASE)


def backup_src():
    if BACKUP_DIR.exists():
        print(f"Backup pehle se hai: {BACKUP_DIR} (skip kar raha hoon)")
        return
    print(f"Backup bana raha hoon: {BACKUP_DIR} ...")
    shutil.copytree(SRC_DIR, BACKUP_DIR)
    print("Backup complete.\n")


def fix_file(file_path: Path):
    text = file_path.read_text(encoding="utf-8", errors="ignore")
    new_text, count = PATTERN.subn(r"\1webp\3", text)
    if count > 0:
        file_path.write_text(new_text, encoding="utf-8")
        rel = file_path.relative_to(SRC_DIR)
        print(f"  {rel}  -> {count} import(s) fixed")
    return count


def main():
    if not SRC_DIR.exists():
        print(f"ERROR: {SRC_DIR} nahi mila. Script ko project root mein rakhiye.")
        return

    backup_src()

    total_files_changed = 0
    total_replacements = 0

    for root, _dirs, files in os.walk(SRC_DIR):
        for fname in files:
            ext = Path(fname).suffix.lower()
            if ext in SCAN_EXTENSIONS:
                fpath = Path(root) / fname
                count = fix_file(fpath)
                if count > 0:
                    total_files_changed += 1
                    total_replacements += count

    print("\n=== Done ===")
    print(f"Files changed        : {total_files_changed}")
    print(f"Total imports fixed  : {total_replacements}")
    print(f"\nAgar kuch galat lage, purana code yahan hai: {BACKUP_DIR}")


if __name__ == "__main__":
    main()
