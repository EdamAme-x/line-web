import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";

const app = new Hono();

app.all("/_proxy/R4", async (c) => {
  const query = new URL(c.req.url).searchParams.toString();
  const targetURL = "https://ci.line-apps.com/R4" +
    (query === "" ? "" : "?" + query);

  const response = await fetch(targetURL, {
    method: c.req.method,
    headers: c.req.raw.headers,
    body: c.req.method === "GET" || c.req.method === "HEAD"
      ? undefined
      : c.req.raw.body,
  });

  return new Response(response.body, {
    status: response.status,
    headers: Object.fromEntries(
      [
        ...response.headers.entries(),
        ["Access-Control-Allow-Origin", "*"],
      ],
    ),
    statusText: response.statusText,
  });
});

app.all("/_proxy/CHROME_GW/*", async (c) => {
  const query = new URL(c.req.url).searchParams.toString();
  const targetURL = "https://line-chrome-gw.line-apps.com" +
    c.req.path.replace("/_proxy/CHROME_GW", "") +
    (query === "" ? "" : "?" + query);

  const response = await fetch(targetURL, {
    method: c.req.method,
    headers: c.req.raw.headers,
    body: c.req.method === "GET" || c.req.method === "HEAD"
      ? undefined
      : c.req.raw.body,
  });

  return new Response(response.body, {
    status: response.status,
    headers: Object.fromEntries(
      [
        ...response.headers.entries(),
        ["Access-Control-Allow-Origin", "*"],
      ],
    ),
    statusText: response.statusText,
  });
});

app.use(
  "*",
  serveStatic({
    root: "./www",
  }),
);

app.notFound((c) =>
  c.redirect("/?fallbackBy=" + encodeURIComponent(c.req.path))
);

const options = Deno.args[0] === "localhost"
  ? {
    cert: await Deno.readTextFile("./secret/cert.pem"),
    key: await Deno.readTextFile("./secret/key.pem"),
  }
  : {};

Deno.serve({
  port: 443,
  ...options,
}, app.fetch);
