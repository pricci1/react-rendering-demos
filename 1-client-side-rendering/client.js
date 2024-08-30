import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootDiv = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(rootDiv)
const appReactElement = React.createElement(App, null)

reactRoot.render(appReactElement) // Eq: reactRoot.render(<App />)
