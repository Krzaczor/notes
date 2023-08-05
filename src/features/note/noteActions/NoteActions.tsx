import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
    BsCheckCircle,
    BsCheckCircleFill,
    BsExclamationCircle,
    BsExclamationCircleFill
} from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { useNotesActions } from 'context/notesContext';
import Actions from 'features/shared/actions/Actions';
import Button from 'features/shared/button/Button';
import Link from 'features/shared/link/Link';
import { Props, StateLocation } from './NoteActions.types';
import Modal from 'features/shared/modal/Modal';

const NoteActions = ({ note }: Props) => {
    const [showModalRemove, setShowModalRemove] = useState(false);
    const { removeOneNote, updateOneNote } = useNotesActions();
    const location = useLocation();
    const navigate = useNavigate();

    const prevLocation = (location.state as StateLocation)?.prevLocation || '/all';

    const handleShowModal = () => {
        setShowModalRemove(true);
    }

    const handleHideModal = () => {
        setShowModalRemove(false);
    }

    const handleRemoveNote = () => {
        removeOneNote(note.id);
        navigate(prevLocation);
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
            <Button variant='second' onClick={handleShowModal}>
                <FaTrash size={18} color='var(--color-danger)' />
            </Button>
            <Modal
                show={showModalRemove}
                title='Usuwanie notatki'
                message='Napewno chcesz usunąć notatkę?'
                contentCancel='rezygnuję'
                contentConfirm='usuwam'
                onCancel={handleHideModal}
                onConfirm={handleRemoveNote}
            />
        </Actions>
    )
}

export default NoteActions;
