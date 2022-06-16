import { useLocation } from 'react-router-dom';
import { useNotesActions } from 'context/notesContext';
import * as S from './NoteItem.styles';
import { Note } from 'types';

const NoteItem = ({ id, content, done, priority }: Note) => {
    const { updateOneNote } = useNotesActions();
    const { pathname, search } = useLocation();

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
            <S.NoteLink
                to={`/${id}`}
                state={{ prevLocation: `${pathname}${search}` }}
            >{ content }</S.NoteLink>
        </S.NoteItem>
    )
}

export default NoteItem;
