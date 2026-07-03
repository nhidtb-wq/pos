const CACHE = 'pos-v2';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.delete('pos-v1')); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
