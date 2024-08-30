import { renderToString } from 'react-dom/server';

import App from './App';

const getServerSideProps = (async () => {
  const randomValueFromServer = await new Promise((r) => setTimeout(() => r(Math.random()), 1000))

  return { randomValueFromServer }
})

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/client.js") return new Response(Bun.file('./dist/client.js'));

    const serverSideProps = await getServerSideProps();
    const serverSidePropsSerialized = JSON.stringify(serverSideProps);

    const appString = renderToString(<App {...serverSideProps} />);
    const html = `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root">${appString}</div>

          <br><br>
          <p>-----------</p>
          <pre id="server-data">${serverSidePropsSerialized}</pre>
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
