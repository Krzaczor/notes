import NavNotes from './navNotes/NavNotes';
import NotesList from './notesList/NotesList';

const NotesLayout = () => {
    return (
        <main>
            <NavNotes />
            <NotesList />
        </main>
    );
}

export default NotesLayout;
