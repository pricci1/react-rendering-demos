import ReactDOM from 'react-dom/server';

import App from './App';

Bun.serve({
  async fetch() {
    const appString = ReactDOM.renderToString(<App />);
    const html = `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root">${appString}</div>
        </body>
      </html>
    `
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
  port: 3444,
});
