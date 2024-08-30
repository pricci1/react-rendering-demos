import { renderToString } from 'react-dom/server';

import App from './App';

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/client.js") return new Response(Bun.file('./dist/client.js'));

    const appString = renderToString(<App />);
    const html = `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root">${appString}</div>
          <script src="client.js"></script>
        </body>
      </html>
    `
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
  port: 3444,
});
