import { useLocation } from 'react-router-dom';
import { useNotesState } from 'context/notesContext';
import { useCategory } from 'hooks/useCategory';
import Main from 'components/shared/main/Main';
import NavNotes from 'components/notesLayout/navNotes/NavNotes';
import NoteForm from 'components/notesLayout/noteForm/NoteForm';
import NotesList from 'components/notesLayout/notesList/NotesList';
import EmptyList from 'components/emptyList/EmptyList';
import { NoteList } from 'types';

const NoteListPage = () => {
    const { categoryId } = useCategory();
    const { notes, error } = useNotesState();
    const { pathname } = useLocation();
    
    let notesList: NoteList = [];
    
    if (error) {
        return <p>coś poszło nie tak</p>;
    }

    if (categoryId) {
        notesList = notes.filter(note => note.category === categoryId);
    } else {
        notesList = [...notes];
    }
    
    if (pathname === '/undone') {
        notesList = notesList.filter(note => !note.done);
    } else if (pathname === '/priority') {
        notesList = notesList.filter(note => note.priority);
    }

    return (
        <Main>
            <NavNotes />
            { notesList.length > 0
                ? <NotesList notes={notesList} /> 
                : <EmptyList />
            }
            { categoryId ? <NoteForm category={categoryId} /> : null }
        </Main>
    )
}

export default NoteListPage;
