// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js'; 
import './style.css';
import App from './App.jsx';
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>\ 
    <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </HelmetProvider>
  </StrictMode>
);