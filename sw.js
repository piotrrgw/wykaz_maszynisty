// Wersja: v1.7
const CACHE_NAME = 'maszynista-pwa-v1.7';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './apple-touch-icon.png',
    './favicon.svg'
];

// Instalacja Service Workera i cache'owanie plików
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Aktywacja i czyszczenie starych cache'y
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Przechwytywanie żądań i serwowanie z cache'u w trybie offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            // Zwróć plik z cache'u, a jeśli go nie ma, pobierz z sieci
            return response || fetch(event.request);
        })
    );
});