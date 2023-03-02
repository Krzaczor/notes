import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from 'globalStyles';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
