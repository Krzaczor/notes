import { useRef, useState } from 'react';
import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import MoreOptions from 'components/moreOptions/MoreOptions';
import * as S from './NavNotes.styles';
import { useNotesActions, useNotesState } from 'context/notesContext';

const NavNotes = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const { notes } = useNotesState();
    const { updateManyNotes, removeManyNotes } = useNotesActions();
    const btnRef = useRef<HTMLButtonElement>(null!);

    const handleToggleMoreOptions = () => {
        setShowMoreOptions(prev => !prev);
    }

    const handleCloseMoreOptions = () => {
        setShowMoreOptions(false);
    }

    const handleRemoveAllNotes = () => {
        handleCloseMoreOptions();
        removeManyNotes(notes.map(note => note.id));
    }

    const handlePriorityAllNotes = () => {
        handleCloseMoreOptions();
        updateManyNotes(notes.map(note => note.id), {
            priority: true
        });
    }

    const handleUnpriorityAllNotes = () => {
        handleCloseMoreOptions();
        updateManyNotes(notes.map(note => note.id), {
            priority: false
        });
    }

    const handleDoneAllNotes = () => {
        handleCloseMoreOptions();
        updateManyNotes(notes.map(note => note.id), {
            done: new Date()
        });
    }

    const handleUndoneAllNotes = () => {
        handleCloseMoreOptions();
        updateManyNotes(notes.map(note => note.id), {
            done: null
        });
    }

    return (
        <Actions>
            <MoreOptions
                show={showMoreOptions}
                onClose={handleCloseMoreOptions}
                element={<Button
                    ref={btnRef}
                    variant='second'
                    onClick={handleToggleMoreOptions}
                >b</Button>}
            >
                <Button onClick={handleRemoveAllNotes}>usuń</Button>
                <Button onClick={handlePriorityAllNotes}>ważne</Button>
                <Button onClick={handleUnpriorityAllNotes}>nieważne</Button>
                <Button onClick={handleDoneAllNotes}>zrobione</Button>
                <Button onClick={handleUndoneAllNotes}>niezrobione</Button>
            </MoreOptions>
            <S.Link to='/all' replace>ogółem</S.Link>
            <S.Link to='/undone' replace>nie zrobione</S.Link>
            <S.Link to='/priority' replace>ważne</S.Link>
        </Actions>
    );
}

export default NavNotes;
