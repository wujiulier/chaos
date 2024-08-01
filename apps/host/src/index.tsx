// if (process.env.NODE_ENV === 'development') {
//   require('react-error-overlay');
// }


import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css'; // Import Tailwind CSS
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

// TODO createRoot 时，overlay error 不起作用
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// console.log('app',App);
// ReactDOM.render(<App />, document.getElementById('root'));
