import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SettingsProvider } from 'context/settingsContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <SettingsProvider>
        <App />
      </SettingsProvider>
  </StrictMode>
);

reportWebVitals();
