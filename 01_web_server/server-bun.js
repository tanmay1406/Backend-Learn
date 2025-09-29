import { serve, Server } from "bun";
serve({
  port: 3000,
  hostname: "127.0.0.1",
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello World\n", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Ice Tea\n", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      return new Response("Not Found\n", {
        status: 404,
        headers: { "Content-Type": "text/plain" },
      });
    }
  },
});