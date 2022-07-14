import { useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import NoteListPage from 'pages/NoteListPage';
import NoteItemPage from 'pages/NoteItemPage';
import NotFoundPage from 'pages/NotFoundPage';
import PanelCategories from 'components/panelCategories/PanelCategories';
import { useNotesState } from 'context/notesContext';
import { useCategoriesState } from 'context/categoriesContext';
import CategoriesAndNotes from 'components/errorStorage/categoriesAndNotes/CategoriesAndNotes';
import { useSettingsState } from 'context/settingsContext';
import Settings from 'components/errorStorage/settings/Settings';

function App() {
    const [canShowPanelCategories, setCanShowPanelCategories] = useState(false);
    const { notes, error: errorNotes } = useNotesState();
    const { categories, error: errorCategories } = useCategoriesState();
    const { settings, error: errorSettings } = useSettingsState();

    const showPanelCategories = () => {
        setCanShowPanelCategories(true);
    }

    const hidePanelCategories = () => {
        setCanShowPanelCategories(false);
    }

    if (errorNotes !== null || errorCategories !== null) {
        return <CategoriesAndNotes />;
    }

    if (notes === null || categories === null) {
        return null;
    }

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            {errorSettings !== null && <Settings />}
            <div style={{ display: 'flex', height: '100%' }}>
                {settings && (
                    <PanelCategories
                        show={canShowPanelCategories}
                        onClose={hidePanelCategories}
                    />
                )}
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <CommonPage
                        showPanelCategories={showPanelCategories}
                    />
                    <Routes>
                        <Route path='/' element={<Navigate replace to='/all' />} />
                        <Route path='/all' element={<NoteListPage />} />
                        <Route path='/undone' element={<NoteListPage />} />
                        <Route path='/priority' element={<NoteListPage />} />
                        <Route path='/:noteId' element={<NoteItemPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
