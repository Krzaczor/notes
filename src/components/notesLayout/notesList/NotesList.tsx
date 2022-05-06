import { useNotesState } from 'context/notesContext';
import NoteItem from './noteItem/NoteItem';
import * as S from './NotesList.styles';

const NotesList = () => {
    const { notes } = useNotesState();

    return (
        <S.NotesList>
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
        </S.NotesList>
    )
}

export default NotesList;
