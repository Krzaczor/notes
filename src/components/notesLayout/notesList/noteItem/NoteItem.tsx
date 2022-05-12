import { useNotesActions } from 'context/notesContext';
import { Note } from 'types';
import * as S from './NoteItem.styles';

const NoteItem = ({ id, content, done, priority }: Note) => {
    const { updateOneNote } = useNotesActions();

    const handleToggleDoneNote = () => {
        updateOneNote(id, {
            done: !!done ? null : new Date()
        })
    }

    const handleTogglePriorityNote = () => {
        updateOneNote(id, {
            priority: !priority
        })
    }

    return (
        <S.NoteItem>
            <input type='checkbox' checked={!!done} onChange={handleToggleDoneNote} />
            <input type='checkbox' checked={priority} onChange={handleTogglePriorityNote} />
            <S.NoteLink to={`/${id}`}>{ content }</S.NoteLink>
        </S.NoteItem>
    )
}

export default NoteItem;
