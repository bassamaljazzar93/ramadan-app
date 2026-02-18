const CACHE = 'ramadan-v5-20260218';
const STATIC = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

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
  // Skip caching for external APIs and dynamic content
  if (url.includes('api.aladhan.com') ||
      url.includes('raw.githubusercontent.com') ||
      url.includes('nominatim.openstreetmap.org') ||
      url.includes('fonts.googleapis.com') ||
      url.includes('chrome-extension://')) return;

  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request.clone())   // ← clone the REQUEST before passing to fetch
      .then(response => {
        // Only cache valid responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const responseClone = response.clone(); // ← clone RESPONSE before caching
        caches.open(CACHE).then(c => c.put(e.request, responseClone));
        return response;
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
      return clients.openWindow('./');
    })
  );
});

const timers = {};

function scheduleAll(prayers) {
  Object.keys(timers).forEach(k => { clearTimeout(timers[k]); delete timers[k]; });
  if (!prayers) return;

  const now = Date.now();
  const soundKeys = ['Fajr','Dhuhr','Asr','Maghrib','Isha','suhoor','qiyam'];

  Object.entries(prayers).forEach(([name, info]) => {
    const diff = info.time - now;
    if (diff > 0 && diff < 24 * 3600 * 1000) {
      timers[name] = setTimeout(() => {
        // 1. System notification
        self.registration.showNotification(info.title, {
          body: info.body,
          icon: './icon-192.png',
          badge: './icon-192.png',
          vibrate: [400, 100, 400, 100, 400],
          tag: name,
          requireInteraction: true,
          dir: 'auto',
        });

        // 2. Send message to app window to play sound
        if (soundKeys.includes(name)) {
          clients.matchAll({ type: 'window', includeUncontrolled: true }).then(allClients => {
            allClients.forEach(client => {
              client.postMessage({
                type: 'PLAY_AZAN',
                prayerName: info.title,
                prayerTime: info.body
              });
            });
          });
        }
      }, diff);
    }
  });
}
