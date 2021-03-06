import { useParams } from 'react-router-dom';
import { useNotesState } from 'context/notesContext';
import Main from 'components/shared/main/Main';
import NoteActions from 'components/noteItemLayout/noteActions/NoteActions';
import NoteNotFound from 'components/noteItemLayout/noteNotFound/NoteNotFound';
import NoteItem from 'components/noteItemLayout/noteItem/NoteItem';

const NoteItemPage = () => {
    const { notes } = useNotesState();
    const { noteId } = useParams();
    
    if (notes === null) {
        return null;
    }
    
    const note = notes.find(note => note.id === noteId);

    return (
        <Main>
            {note && <NoteActions note={note} />}
            {note ? <NoteItem note={note} /> : <NoteNotFound />}
        </Main>
    )
}

export default NoteItemPage;
