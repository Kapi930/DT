// Transición de Evolución. No toca registros, cachés ni datos de la DT anterior.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method==='GET'&&event.request.mode==='navigate'&&url.origin===self.location.origin&&url.pathname.startsWith('/DT/evolucion/'))event.respondWith(fetch(event.request,{cache:'no-store'}));});
