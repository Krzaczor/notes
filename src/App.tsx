import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import NoteListPage from 'pages/NoteListPage';
import NoteItemPage from 'pages/NoteItemPage';
import NotFoundPage from 'pages/NotFoundPage';
import { basePath, undonePath, priorityPath, notePath, notFoundPath } from 'config/router';
import 'App.scss';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={basePath} element={<Layout />}>
                    <Route index element={<NoteListPage />} />
                    <Route path={undonePath} element={<NoteListPage />} />
                    <Route path={priorityPath} element={<NoteListPage />} />
                    <Route path={notePath} element={<NoteItemPage />} />
                    <Route path={notFoundPath} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
