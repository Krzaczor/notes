import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeApp from 'theme/ThemeApp';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

reportWebVitals();
