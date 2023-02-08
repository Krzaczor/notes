import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import NoteListPage from 'pages/NoteListPage';
import NoteItemPage from 'pages/NoteItemPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Navigate replace to='all' />} />
                    <Route path='all' element={<NoteListPage />} />
                    <Route path='undone' element={<NoteListPage />} />
                    <Route path='priority' element={<NoteListPage />} />
                    <Route path=':noteId' element={<NoteItemPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
