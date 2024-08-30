import ReactDOM from 'react-dom/client';
import App from './App';

const rootDiv = document.getElementById('root')

const serializedData = document.getElementById('server-data').textContent;
const data = JSON.parse(serializedData);

ReactDOM.hydrateRoot(rootDiv, <App {...data} />);
