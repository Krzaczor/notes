import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import NoteListPage from 'pages/NoteListPage';
import NoteItemPage from 'pages/NoteItemPage';
import NotFoundPage from 'pages/NotFoundPage';
import GlobalStyles from './globalStyles';


function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <CommonPage />
            <Routes>
                <Route path='/' element={<Navigate replace to='/all' />} />
                <Route path='/all' element={<NoteListPage />} />
                <Route path='/undone' element={<NoteListPage />} />
                <Route path='/priority' element={<NoteListPage />} />
                <Route path='/:noteId' element={<NoteItemPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
