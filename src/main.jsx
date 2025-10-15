import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax'; // Import ParallaxProvider
import App from './App.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider> {/* Wrap your App component */}
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
);