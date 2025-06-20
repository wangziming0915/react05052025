// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <App />
  );
} else {
  console.error('Root element with ID "root" not found in the DOM. Please ensure public/index.html contains <div id="root"></div>');
}
