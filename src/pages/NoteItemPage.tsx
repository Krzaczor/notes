import { useParams } from 'react-router-dom';
import { useNotesState } from 'context/notesContext';
import Main from 'features/shared/main/Main';
import NoteActions from 'features/note/noteActions/NoteActions';
import NoteNotFound from 'features/note/noteNotFound/NoteNotFound';
import NoteItem from 'features/note/noteItem/NoteItem';

const NoteItemPage = () => {
    const { notes } = useNotesState();
    const { noteId } = useParams();
    
    if (notes === null) {
        return null;
    }
    
    const note = notes.find(note => note.id === noteId);

    return (
        <Main>
            {note ? (
                <>
                    <NoteActions note={note} />
                    <NoteItem note={note} />
                </>
            ) : (
                <NoteNotFound />
            )}
        </Main>
    )
}

export default NoteItemPage;
