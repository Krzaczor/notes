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
    const { notes } = useNotesState();
    const { pathname } = useLocation();
    
    let notesList: NoteList = [];
    let notesOfCategory: NoteList = [];

    if (categoryId) {
        notesOfCategory = notes.filter(note => note.category === categoryId);
    } else {
        notesOfCategory = [...notes];
    }
    
    if (pathname === '/undone') {
        notesList = notesOfCategory.filter(note => !note.done);
    } else if (pathname === '/priority') {
        notesList = notesOfCategory.filter(note => note.priority);
    } else {
        notesList = [...notesOfCategory];
    }

    return (
        <Main>
            { notesOfCategory.length > 0 && <NavNotes /> }
            { notesList.length > 0
                ? <NotesList notes={notesList} /> 
                : <EmptyList />
            }
            { categoryId ? <NoteForm category={categoryId} /> : null }
        </Main>
    )
}

export default NoteListPage;
