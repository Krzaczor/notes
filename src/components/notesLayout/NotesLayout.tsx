import NavNotes from './navNotes/NavNotes';
import NotesList from './notesList/NotesList';
import NoteForm from './noteForm/NoteForm';

const NotesLayout = () => {
    return (
        <main>
            <NavNotes />
            <NotesList />
            <NoteForm />
        </main>
    );
}

export default NotesLayout;
