import { useLocation } from 'react-router-dom';
import {
    BsExclamationCircle,
    BsExclamationCircleFill,
    BsCheckCircle,
    BsCheckCircleFill
} from 'react-icons/bs';
import { getUrlCategory } from 'utils/getUrlCategory';
import { useNotesActions } from 'context/notesContext';
import Button from 'components/shared/button/Button';
import * as S from './NoteItem.styles';
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
        <S.NoteItem>
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
            <S.NoteLink
                to={getUrlCategory(`/${id}`, categoryId)}
                state={{ prevLocation: `${pathname}${search}` }}
            >{ content }</S.NoteLink>
        </S.NoteItem>
    )
}

export default NoteItem;
