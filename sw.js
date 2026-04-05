// Service Worker — キャッシュなし（常にネットワーク取得）
// 予約帳と同じ方針: PWAインストール用のみ
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
