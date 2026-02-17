const CACHE = 'ramadan-v2';
const STATIC = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('api.aladhan.com') ||
      url.includes('raw.githubusercontent.com') ||
      url.includes('nominatim.openstreetmap.org') ||
      url.includes('ipapi.co') ||
      url.includes('fonts.googleapis.com')) return;

  e.respondWith(
    fetch(e.request)
      .then(r => {
        caches.open(CACHE).then(c => c.put(e.request, r.clone()));
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});

self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE_NOTIFICATIONS') {
    scheduleAll(e.data.prayers);
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(cls => {
      if (cls.length) return cls[0].focus();
      return clients.openWindow('/');
    })
  );
});

const timers = {};

function scheduleAll(prayers) {
  Object.keys(timers).forEach(k => { clearTimeout(timers[k]); delete timers[k]; });
  if (!prayers) return;
  const now = Date.now();
  Object.entries(prayers).forEach(([name, info]) => {
    const diff = info.time - now;
    if (diff > 0 && diff < 24 * 3600 * 1000) {
      timers[name] = setTimeout(() => {
        self.registration.showNotification(info.title, {
          body: info.body,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          vibrate: [300, 100, 300],
          tag: name,
          requireInteraction: true,
          dir: 'auto',
        });
      }, diff);
    }
  });
}
