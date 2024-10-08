const CACHE_NAME = "line-chrome-cache";
self.addEventListener("install", () => self.skipWaiting()),
  self.addEventListener("activate", () => self.clients.claim()),
  self.addEventListener("message", ({ data: e }) => {
    "clear-cache" === e && caches.delete(CACHE_NAME);
  }),
  self.addEventListener("fetch", (e) => {
    const { request: t } = e, s = new URL(t.url);
    if (/stickershop/.test(s.hostname) && /\.png$/.test(s.pathname)) {
      s.search = "";
      const a = new Request(s, t),
        n = caches.open(CACHE_NAME).then(async (e) => {
          const t = await e.match(a);
          return t || (e.add(a.url), await fetch(a));
        });
      e.respondWith(n);
    }
  });
