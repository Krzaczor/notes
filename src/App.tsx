import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import NoteListPage from 'pages/NoteListPage';
import NoteItemPage from 'pages/NoteItemPage';
import NotFoundPage from 'pages/NotFoundPage';
import PanelCategories from 'components/panelCategories/PanelCategories';
import { useLightMode } from 'hooks/useLightMode';
import { useNotesState } from 'context/notesContext';
import { useCategoriesState } from 'context/categoriesContext';
import CategoriesAndNotes from 'components/errorStorage/categoriesAndNotes/CategoriesAndNotes';

function App() {
    const [canShowPanelCategories, setCanShowPanelCategories] = useState(false);
    const { notes, error: errorNotes } = useNotesState();
    const { categories, error: errorCategories } = useCategoriesState();

    useLightMode();

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
        <BrowserRouter>
            <div style={{ display: 'flex', height: '100%' }}>
                <PanelCategories
                    show={canShowPanelCategories}
                    onClose={hidePanelCategories}
                />
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
        </BrowserRouter>
    );
}

export default App;
