// Minimal service worker: lets the app shell load offline; never touches API calls.
const CACHE = 'azadeh-finance-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(r => {
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
    return r;
  }).catch(() => caches.match(req).then(m => m || caches.match('./index.html'))));
});
