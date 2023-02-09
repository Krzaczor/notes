import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SettingsProvider } from 'context/settingsContext';
import { CategoriesProvider } from 'context/categoriesContext';
import { ListProvider } from 'context/modalContext';
import App from './App';
import GlobalStyles from 'globalStyles';
import reportWebVitals from './reportWebVitals';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <GlobalStyles />
        <ListProvider>
            <SettingsProvider>
                <CategoriesProvider>
                    <App />
                </CategoriesProvider>
            </SettingsProvider>
        </ListProvider>
    </StrictMode>
);

reportWebVitals();
