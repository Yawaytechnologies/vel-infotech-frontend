// src/main.jsx
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js';
import './style.css';
import App from './App.jsx';
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById('root');

const app = (
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);

// Use hydrateRoot when react-snap has pre-rendered HTML, otherwise createRoot
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
