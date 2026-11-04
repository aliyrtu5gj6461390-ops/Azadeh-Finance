# Azadeh Finance — ساخت اپلیکیشن اندروید با GitHub

## مراحل
1. در github.com یک Repository جدید بسازید (مثلاً `azadeh-finance`).
2. **همه‌ی فایل‌های داخل این زیپ** را (نه خود فایل زیپ) در ریشه‌ی Repository آپلود کنید.
   - پوشه‌ی `.github` با نقطه شروع می‌شود و ممکن است در گوشی/کامپیوتر مخفی باشد. اگر آپلود نشد:
     Add file ← Create new file ← در نام فایل بنویسید `.github/workflows/build-apk.yml` و محتوای همان فایل را paste کنید.
3. تب **Actions** را باز کنید. ساخت خودکار شروع می‌شود (یا «Build Android APK» ← Run workflow).
4. بعد از حدود ۵ تا ۱۰ دقیقه، داخل همان اجرا در بخش **Artifacts** فایل `Azadeh-Finance-APK` را دانلود کنید، از زیپ درآورید و `app-debug.apk` را روی گوشی نصب کنید.

## ساختار
- `www/` : خود سایت (index.html و فایل‌های PWA)
- `resources/android/res/` : آیکون و صفحه‌ی شروع ساخته‌شده از لوگو
- `capacitor.config.json` : نام اپ (`Azadeh Finance`) و شناسه‌ی بسته (`com.azadeh.finance`)
- `.github/workflows/build-apk.yml` : اسکریپت ساخت APK

## تغییر سایت
فایل `www/index.html` را عوض کنید و commit بزنید؛ APK جدید خودکار ساخته می‌شود.
