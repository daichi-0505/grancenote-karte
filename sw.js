// カルテ Service Worker v3 — UIデザインガイド適用
// キャッシュなし（常にネットワーク取得）
const CACHE_NAME = 'karte-v3';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
