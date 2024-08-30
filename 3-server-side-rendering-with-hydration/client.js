import ReactDOM from 'react-dom/client';
import App from './App';

const rootDiv = document.getElementById('root')

ReactDOM.hydrateRoot(rootDiv, <App />);
