import { useLocation } from 'react-router-dom';
import Main from 'features/shared/main/Main';
import NavNotes from 'features/note/navNotes/NavNotes';
import NoteForm from 'features/note/noteForm/NoteForm';
import NotesList from 'features/note/notesList/NotesList';
import EmptyList from 'features/note/emptyList/EmptyList';
import { NoteList } from 'types';
import { withNotes } from 'hocs/withNotes';

interface Props {
    notes: NoteList;
    categoryId: string | undefined;
}

const NoteListPage = ({ notes, categoryId }: Props) => {
    const { pathname } = useLocation();
    
    let notesList: NoteList = [...notes];
    
    if (pathname === '/undone') {
        notesList = notes.filter(note => !note.done);
    } else if (pathname === '/priority') {
        notesList = notes.filter(note => note.priority);
    }

    return (
        <Main>
            { notes.length > 0 ? (
                <>
                    <NavNotes />
                    <NotesList notes={notesList} />
                </>
            ) : (
                <EmptyList />
            )}
            { categoryId ? <NoteForm category={categoryId} /> : null }
        </Main>
    )
}

export default withNotes(NoteListPage);
