import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css'; // Import Tailwind CSS
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container || document.body);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
