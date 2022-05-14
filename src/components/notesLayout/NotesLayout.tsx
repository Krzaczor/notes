import Main from 'components/shared/main/Main';
import NavNotes from './navNotes/NavNotes';
import NotesList from './notesList/NotesList';
import NoteForm from './noteForm/NoteForm';

const NotesLayout = () => {
    return (
        <Main>
            <NavNotes />
            <NotesList />
            <NoteForm />
        </Main>
    );
}

export default NotesLayout;
