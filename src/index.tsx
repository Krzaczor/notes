import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeApp from 'components/ThemeApp';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <ThemeApp>
            <App />
        </ThemeApp>
    </StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
