import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx'; // Temporarily comment out App
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log('Root element (#root) found in document.');
  createRoot(rootElement).render(
    <StrictMode>
      <div style={{ padding: '20px', textAlign: 'center', fontSize: '24px' }}>
        Hello from main.tsx! The root element is present.
      </div>
    </StrictMode>
  );
} else {
  console.error('CRITICAL: Root element (#root) not found in document!');
  // Attempt to write to body directly if root is missing, for any sign of life
  document.body.innerHTML = '<div style="color: red; font-size: 24px; text-align: center; padding: 20px;">Error: #root element not found!</div>';
}
