import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lucky from './Components/Lucky';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Lucky />
  </React.StrictMode>
);
