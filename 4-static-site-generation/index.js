import { renderToStaticMarkup } from 'react-dom/server';

import App from './App';

const html = `
  <!DOCTYPE html>
  <html>
    <body>
      <div id="root">${renderToStaticMarkup(<App />)}</div>
    </body>
  </html>
`

Bun.write('./index.html', html)
