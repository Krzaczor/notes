import { Link, useLocation, useParams } from 'react-router-dom';
import { useNotesActions, useNotesState } from 'context/notesContext';
import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import Main from 'components/shared/main/Main';
import Time from 'components/shared/time/Time';
import { Note } from 'types';

interface Props {
    note: Note;
}

interface StateLocation {
    prevLocation: string | null;
}

const NoteActions = ({ note }: Props) => {
    const { removeOneNote, updateOneNote } = useNotesActions();
    const location = useLocation();

    const prevLocation = (location.state as StateLocation)?.prevLocation || '/all';

    const handleRemoveNote = () => {
        removeOneNote(note.id);
    }

    const handleToggleDoneNote = () => {
        updateOneNote(note.id, {
            done: note.done ? null : new Date()
        })
    }

    const handleTogglePriorityNote = () => {
        updateOneNote(note.id, {
            priority: !note.priority
        })
    }

    return (
        <Actions>
            <Link to={prevLocation}>b</Link>
            <Button variant='second' onClick={handleToggleDoneNote}>
                {note.done ? 'd' : 'nd'}
            </Button>
            <Button variant='second' onClick={handleTogglePriorityNote}>
                {/* p = priority, np = not priority */}
                {note.priority ? 'p' : 'np'}
            </Button>
            <Link to={prevLocation} onClick={handleRemoveNote}>
                {/* r = remove */}
                r
            </Link>
        </Actions>
    )
}

const NoteNotFound = () => {
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '15px'}}>
            <p>Niestety nie znaleźliśmy Twojej notatki :(</p>
            <Link to="/all">wróć</Link>
        </div>
    )
}

const NoteItem = ({ note }: Props) => {
    return (
       <>
           <p>Utworzono: <Time time={note.createAt} /></p>
           <p>{ note.content }</p>
       </>
    )
}

const NoteItemPage = () => {
    const { notes } = useNotesState();
    const { noteId } = useParams();

    const note = notes.find(note => note.id === noteId);

    return (
        <Main>
            {note && <NoteActions note={note} />}
            <div style={{ flex: 1, backgroundColor: 'var(--color-background)', color: 'white', padding: 'var(--padding-container)' }}>
                {note ? <NoteItem note={note} /> : <NoteNotFound />}
            </div>
        </Main>
    )
}

export default NoteItemPage;
