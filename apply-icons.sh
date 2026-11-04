#!/usr/bin/env bash
# Replaces Capacitor's default icons/splash with the Azadeh Finance logo (full image, no crop, no zoom).
set -euo pipefail
RES="android/app/src/main/res"
rm -f "$RES"/drawable/ic_launcher_background.xml "$RES"/drawable-v24/ic_launcher_foreground.xml
find "$RES" -name 'ic_launcher*.webp' -delete
find "$RES" -name 'splash.png' -delete
cp -r resources/android/res/. "$RES"/
echo "Icons and splash screens applied."
