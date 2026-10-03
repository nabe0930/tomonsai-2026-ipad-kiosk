const CACHE='tomonsai-kiosk-prototype-v12';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./payment-qr.png'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await Promise.all(FILES.map(async file=>{
      const url=new URL(file,self.registration.scope);
      const fresh=new URL(url);
      fresh.searchParams.set('version',CACHE);
      const response=await fetch(fresh,{cache:'reload'});
      if(!response.ok)throw Error(`キャッシュ取得失敗: ${file}`);
      await cache.put(url,response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('tomonsai-kiosk-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request);
        if(response.ok){const cache=await caches.open(CACHE);await cache.put(request,response.clone())}
        return response;
      }catch{
        return await caches.match(request)||await caches.match(new URL('./index.html',self.registration.scope))||Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.match(request).then(hit=>hit||fetch(request)));
});
