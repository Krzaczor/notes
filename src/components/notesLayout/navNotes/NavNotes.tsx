import { useRef, useState, useEffect } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import { getUrlCategory } from 'utils/getUrlCategory';
import { useNotesActions, useNotesState } from 'context/notesContext';
import { useCategory } from 'hooks/useCategory';
import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import MoreOptions from 'components/moreOptions/MoreOptions';
import * as S from './NavNotes.styles';

const NavNotes = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const { notes } = useNotesState();
    const { updateManyNotes, removeManyNotes } = useNotesActions();
    const btnRef = useRef<HTMLButtonElement>(null!);
    const { categoryId } = useCategory();

    const currentNoteIds = notes.map(note => note.id);

    const handleToggleMoreOptions = () => {
        setShowMoreOptions(prev => !prev);
    }

    const handleCloseMoreOptions = () => {
        setShowMoreOptions(false);
    }

    const handleRemoveAllNotes = () => {
        removeManyNotes(currentNoteIds);
    }

    const handlePriorityAllNotes = () => {
        updateManyNotes(currentNoteIds, { priority: true });
    }

    const handleUnpriorityAllNotes = () => {
        updateManyNotes(currentNoteIds, { priority: false });
    }

    const handleDoneAllNotes = () => {
        updateManyNotes(currentNoteIds, { done: new Date() });
    }

    const handleUndoneAllNotes = () => {
        updateManyNotes(currentNoteIds, { done: null });
    }

    useEffect(() => {
        handleCloseMoreOptions();
    }, [notes]);

    return (
        <Actions>
            <MoreOptions
                show={showMoreOptions}
                onClose={handleCloseMoreOptions}
                element={<Button
                    ref={btnRef}
                    onClick={handleToggleMoreOptions}
                ><RiMore2Fill size={24} /></Button>}
            >
                <Button onClick={handlePriorityAllNotes}>ważne</Button>
                <Button onClick={handleUnpriorityAllNotes}>nieważne</Button>
                <Button onClick={handleDoneAllNotes}>zrobione</Button>
                <Button onClick={handleUndoneAllNotes}>niezrobione</Button>
                <Button onClick={handleRemoveAllNotes}>usuń</Button>
            </MoreOptions>
            <S.Link to={getUrlCategory('/all', categoryId)} replace>ogółem</S.Link>
            <S.Link to={getUrlCategory('/undone', categoryId)} replace>nie zrobione</S.Link>
            <S.Link to={getUrlCategory('/priority', categoryId)} replace>ważne</S.Link>
        </Actions>
    );
}

export default NavNotes;
