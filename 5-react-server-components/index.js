import { PassThrough } from "stream";

import { renderToPipeableStream } from '@physis/react-server-dom-esm/server';
import { Suspense } from "react";

const Comp = async () => {
  const randomValue = await new Promise((r) => setTimeout(() => r(Math.random()), 3000))

  return (<h1>Hello from async component {randomValue}</h1>);
}

const App = () => {
  return (
    <div>
      <h1>React Server Components</h1>
      <Suspense fallback={<h3>Loading!</h3>}>
        <Comp />
      </Suspense>
    </div>
  );
}

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/client.js") return new Response(Bun.file('./dist/client.js'));
    if (url.pathname === "/client") {
      const html = `
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
            <script src="client.js"></script>
          </body>
        </html>
      `
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    const pt = new PassThrough();
    const pipeableStream = renderToPipeableStream(<App />);
    pipeableStream.pipe(pt)

    return new Response(pt, { headers: { 'Content-Type': 'text/text' } });
  },
  port: 3444,
});
