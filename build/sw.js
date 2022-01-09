let cacheData = "AppV1";

this.addEventListener("install", (event) => {
     event.waitUntil(
          caches.open(cacheData).then((cache) => {
               cache.addAll([
                    '/static/js/bundle.js',
                    '/favicon.ico',
                    '/static/js/main.chunk.js',
                    '/static/js/vendors~main.chunk.js',
                    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;800&display=swap',
                    'https://fonts.gstatic.com/s/opensans/v27/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2',
                    '/static/media/people.ca43f938.png',
                    '/'
               ])
          })
     )
})
// self.addEventListener('fetch', function (event) {
//      event.respondWith(
//           caches.open('mysite-dynamic').then(function (cache) {
//                return cache.match(event.request).then(function (response) {
//                     return (
//                          response ||
//                          fetch(event.request).then(function (response) {
//                               cache.put(event.request, response.clone());
//                               return response;
//                          })
//                     );
//                });
//           }),
//      );
// });

this.addEventListener("fetch", (event) => {
     event.respondWith(
          // caches.match(event.request).then((res) => {
          //      if (res) {
          //           return res
          //      }
          // })
          fetch(event.request).catch(function () {
               return caches.match(event.request);
          })
     )
})