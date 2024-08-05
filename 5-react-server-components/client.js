import { StrictMode, Suspense, use } from 'react'
import ReactDOM from 'react-dom/client'
import { createFromFetch } from '@physis/react-server-dom-esm/client.browser';

const Comp = ({ aPromise }) => use(aPromise)

const fromFetchPromise = createFromFetch(fetch('/', { method: 'GET' }))

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<h3>Loading!</h3>}>
      <Comp aPromise={fromFetchPromise} />
    </Suspense>
  </StrictMode>
)
