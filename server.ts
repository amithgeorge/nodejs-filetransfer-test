Bun.serve({
  port: 2828,
  routes: {
    "/documents": {
      POST: async req => {
        const dataBuffer = await req.arrayBuffer();
        const length = dataBuffer.byteLength;

        return Response.json({ created: true, buffer: { length } });
      },
      GET: async req => {
        let count = parseInt(new URL(req.url).searchParams.get("num100KBs") || "10", 10);
        if (count >= 200) {
          count = 200
        }
        const size = count * 100 * 1024;
        const buffer = new Uint8Array(size);
        crypto.getRandomValues(buffer);

        return new Response(buffer, { status: 200, headers: { "Cache-Control": "no-store, max-age=0" } });
      }
    },
  },

  fetch(_req) {
    return new Response("Not Found", { status: 404 });
  },
});