import { Link, useLocation } from 'react-router-dom';
import {
    BsExclamationCircle,
    BsExclamationCircleFill,
    BsCheckCircle,
    BsCheckCircleFill
} from 'react-icons/bs';
import { getUrlCategory } from 'utils/getUrlCategory';
import { useNotesActions } from 'context/notesContext';
import Button from 'features/shared/button/Button';
import s from './NoteItem.module.scss';
import { Note } from 'types';

interface Props extends Note {
    categoryId: string | undefined;
}

const NoteItem = ({ id, content, done, priority, categoryId }: Props) => {
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
        <li className={s.root}>
            <Button onClick={handleToggleDoneNote}>
                {!!done ? (
                    <BsCheckCircleFill color='var(--color-success)' size={26} />
                ) : (
                    <BsCheckCircle color='var(--color-text)' size={26} />
                )}
            </Button>
            <Button onClick={handleTogglePriorityNote}>
                {priority ? (
                    <BsExclamationCircleFill color='var(--color-info)' size={26} />
                ) : (
                    <BsExclamationCircle color='var(--color-text)' size={26} />
                )}
            </Button>
            <Link
                className={s.link}
                to={getUrlCategory(`/${id}`, categoryId)}
                state={{ prevLocation: `${pathname}${search}` }}
            >{ content }</Link>
        </li>
    )
}

export default NoteItem;
