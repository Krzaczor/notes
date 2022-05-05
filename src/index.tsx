import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SettingsProvider } from 'context/settingsContext';
import { CategoriesProvider } from 'context/categoriesContext';
import { NotesProvider } from 'context/notesContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <SettingsProvider>
            <CategoriesProvider>
                <NotesProvider>
                    <App />
                </NotesProvider>
            </CategoriesProvider>
        </SettingsProvider>
    </StrictMode>
);

reportWebVitals();
