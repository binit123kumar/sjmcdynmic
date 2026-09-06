"""
compress_news_images.py
-------------------------
compress_images.py ne sirf 'src/asset' folder scan kiya tha —
'src/News/NewsImages' rah gaya tha. Yeh script wahi folder
compress + WebP convert karta hai.

Chalane ka tareeka:
    cd D:\SJMC-Dynamic\Frontend\sjmc
    python compress_news_images.py
"""

import os
import shutil
from pathlib import Path
from PIL import Image

PROJECT_ROOT = Path(__file__).parent
TARGET_DIR = PROJECT_ROOT / "src" / "News" / "NewsImages"
BACKUP_DIR = PROJECT_ROOT / "News_backup_original"
MAX_DIMENSION = 1600
WEBP_QUALITY = 80
VALID_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".webp"}


def human_size(n):
    for unit in ["B", "KB", "MB", "GB"]:
        if n < 1024:
            return f"{n:.1f}{unit}"
        n /= 1024
    return f"{n:.1f}TB"


def main():
    if not TARGET_DIR.exists():
        print(f"ERROR: {TARGET_DIR} nahi mila.")
        return

    if not BACKUP_DIR.exists():
        print(f"Backup bana raha hoon: {BACKUP_DIR} ...")
        shutil.copytree(TARGET_DIR, BACKUP_DIR)

    total_before = total_after = count = 0

    for root, _dirs, files in os.walk(TARGET_DIR):
        for fname in files:
            ext = Path(fname).suffix.lower()
            if ext not in VALID_EXTENSIONS:
                continue
            fpath = Path(root) / fname
            before = fpath.stat().st_size
            total_before += before
            try:
                with Image.open(fpath) as img:
                    if img.mode in ("P", "LA"):
                        img = img.convert("RGBA")
                    elif img.mode not in ("RGB", "RGBA"):
                        img = img.convert("RGB")
                    if img.width > MAX_DIMENSION or img.height > MAX_DIMENSION:
                        img.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.LANCZOS)
                    webp_path = fpath.with_suffix(".webp")
                    img.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)
                if fpath.suffix.lower() != ".webp":
                    fpath.unlink()
                after = webp_path.stat().st_size
                total_after += after
                count += 1
                print(f"  {webp_path.name}  {human_size(before)} -> {human_size(after)}")
            except Exception as e:
                total_after += before
                print(f"  FAILED: {fpath.name} -> {e}")

    print(f"\nDone. Files: {count}  Before: {human_size(total_before)}  After: {human_size(total_after)}")


if __name__ == "__main__":
    main()
