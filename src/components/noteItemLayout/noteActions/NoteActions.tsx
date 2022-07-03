import { useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
    BsCheckCircle,
    BsCheckCircleFill,
    BsExclamationCircle,
    BsExclamationCircleFill
} from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { useNotesActions } from 'context/notesContext';
import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import Link from 'components/shared/link/Link';
import { Props, StateLocation } from './NoteActions.types';

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
            <Link to={prevLocation}>
                <AiOutlineArrowLeft size={20} color='var(--color-text)' />
            </Link>
            <Button variant='second' onClick={handleToggleDoneNote}>
                {note.done ? (
                    <BsCheckCircleFill color='var(--color-success)' size={22} />
                ) : (
                    <BsCheckCircle color='var(--color-text)' size={22} />
                )}
            </Button>
            <Button variant='second' onClick={handleTogglePriorityNote}>
                {note.priority ? (
                    <BsExclamationCircleFill color='var(--color-info)' size={22} />
                ) : (
                    <BsExclamationCircle color='var(--color-text)' size={22} />
                )}
            </Button>
            <Link  variant='second' to={prevLocation} onClick={handleRemoveNote}>
                <FaTrash size={18} color='var(--color-danger)' />
            </Link>
        </Actions>
    )
}

export default NoteActions;
