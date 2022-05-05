import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SettingsProvider } from 'context/settingsContext';
import { NotesProvider } from 'context/notesContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <SettingsProvider>
            <NotesProvider>
                <App />
            </NotesProvider>
        </SettingsProvider>
    </StrictMode>
);

reportWebVitals();
