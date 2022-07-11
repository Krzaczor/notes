import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import NoteListPage from 'pages/NoteListPage';
import NoteItemPage from 'pages/NoteItemPage';
import NotFoundPage from 'pages/NotFoundPage';
import PanelCategories from 'components/panelCategories/PanelCategories';
import GlobalStyles from './globalStyles';
import { useLightMode } from 'hooks/useLightMode';

function App() {
    const [canShowPanelCategories, setCanShowPanelCategories] = useState(false);
    useLightMode();

    const showPanelCategories = () => {
        setCanShowPanelCategories(true);
    }

    const hidePanelCategories = () => {
        setCanShowPanelCategories(false);
    }

    return (
        <BrowserRouter>
            <GlobalStyles />
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
