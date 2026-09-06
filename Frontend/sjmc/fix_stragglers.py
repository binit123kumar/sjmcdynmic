"""
fix_stragglers.py
-------------------
Kuch images bahut high-resolution hone ki wajah se Pillow ki
default 'decompression bomb' safety limit se conversion fail ho
gaya tha. Yeh script us limit ko hata kar un bachi hui images ko
dobara try karta hai, aur agar phir bhi fail ho to poora error
dikhata hai.

Chalane ka tareeka:
    cd D:\SJMC-Dynamic\Frontend\sjmc
    python fix_stragglers.py
"""

from pathlib import Path
from PIL import Image

Image.MAX_IMAGE_PIXELS = None  # safety limit hata diya (hum jaante hain yeh legit photos hain)

PROJECT_ROOT = Path(__file__).parent
MAX_DIMENSION = 1600
WEBP_QUALITY = 80

# Yahan wo specific files hain jo pehle fail hui thi
TARGETS = [
    PROJECT_ROOT / "src" / "asset" / "Our gallery" / "Still" / "16.jpeg",
]


def human_size(n):
    for unit in ["B", "KB", "MB", "GB"]:
        if n < 1024:
            return f"{n:.1f}{unit}"
        n /= 1024
    return f"{n:.1f}TB"


def convert(fpath: Path):
    if not fpath.exists():
        print(f"SKIP (nahi mili): {fpath}")
        return
    before = fpath.stat().st_size
    try:
        with Image.open(fpath) as img:
            print(f"  Opened: {fpath.name}  mode={img.mode}  size={img.size}")
            if img.mode in ("P", "LA"):
                img = img.convert("RGBA")
            elif img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGB")
            if img.width > MAX_DIMENSION or img.height > MAX_DIMENSION:
                img.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.LANCZOS)
            webp_path = fpath.with_suffix(".webp")
            img.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)
        fpath.unlink()
        after = webp_path.stat().st_size
        print(f"  SUCCESS: {webp_path.name}  {human_size(before)} -> {human_size(after)}")
    except Exception as e:
        print(f"  FAILED: {fpath.name}")
        print(f"  Reason: {type(e).__name__}: {e}")


if __name__ == "__main__":
    for t in TARGETS:
        convert(t)
