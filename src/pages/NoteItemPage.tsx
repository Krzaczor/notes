import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import { useNotesState } from 'context/notesContext';
import { useParams } from 'react-router-dom';

const NoteItemPage = () => {
    const { notes } = useNotesState();
    const { noteId } = useParams();

    const note = notes.find(note => note.id === noteId);

    if (!note) {
        return <p>nie znaleziono notatki</p>;
    }

    return (
        <>
            <Actions>
                <Button variant='second'>b</Button>
                <Button variant='second'>d</Button>
                <Button variant='second'>p</Button>
                <Button variant='second'>r</Button>
            </Actions>
            <p>{ note.content }</p>
        </>
    )
}

export default NoteItemPage;
