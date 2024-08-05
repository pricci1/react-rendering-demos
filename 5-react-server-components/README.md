# server-side-rendering

Since the `react-server-dom-esm` package is not published on npm/jsr, you need to [build it from source](https://legacy.reactjs.org/docs/how-to-contribute.html#development-workflow).

Tested in `5fb67fa25c4ea8be046c6d9af41047f3cc379279`

```sh
yarn cross-env RELEASE_CHANNEL=experimental node ./scripts/rollup/c.js react/index,react/jsx,react.react-server,react-dom/index,react-dom/client,react-dom/server,react-dom.react-server,react-dom-server.node,react-dom-server-legacy.node,scheduler,react-server-dom-esm/ --type=NODE,ESM_PROD,NODE_ES2015 && mv ./build/node_modules ./build/oss-experimental
```
Then link it (`bun link`)

---

Build and start the server

```sh
bun run build
bun --watch --conditions="react-server" run index.js
```
