import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { msalInstance, initializeMsal } from './config/auth';
import App from './App';
import './index.css';

// Initialize MSAL before rendering
initializeMsal().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}).catch(error => {
  console.error('Error initializing application:', error);
});