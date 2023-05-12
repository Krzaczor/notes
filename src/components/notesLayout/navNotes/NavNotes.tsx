import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMore2Fill } from 'react-icons/ri';
import clsx from 'clsx';
import { getUrlCategory } from 'utils/getUrlCategory';
import { useNotesActions, useNotesState } from 'context/notesContext';
import { useCategory } from 'hooks/useCategory';
import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import MoreOptions from 'components/moreOptions/MoreOptions';
import s from './NavNotes.module.scss';

const getClassesLink = (p: { isActive: boolean }) => {
    return clsx(s.link, { [s.active]: p.isActive });
}

const NavNotes = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const { notes } = useNotesState();
    const { updateManyNotes, removeManyNotes } = useNotesActions();
    const btnRef = useRef<HTMLButtonElement>(null!);
    const { categoryId } = useCategory();

    const currentNoteIds = notes.filter(note => note.category === categoryId).map(note => note.id);

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
                <Button fluid onClick={handlePriorityAllNotes}>oznacz zadania jako ważne</Button>
                <Button fluid onClick={handleUnpriorityAllNotes}>oznacz zadania jako nieważne</Button>
                <Button fluid onClick={handleDoneAllNotes}>oznacz zadania jako zatwierdzone</Button>
                <Button fluid onClick={handleUndoneAllNotes}>oznacz zadania jako niezatwierdzone</Button>
                <Button fluid variant='outline-danger' onClick={handleRemoveAllNotes}>usuń wszystkie zadania</Button>
            </MoreOptions>
            <NavLink className={getClassesLink} to={getUrlCategory('/all', categoryId)} replace>ogółem</NavLink>
            <NavLink className={getClassesLink} to={getUrlCategory('/undone', categoryId)} replace>nie zrobione</NavLink>
            <NavLink className={getClassesLink} to={getUrlCategory('/priority', categoryId)} replace>ważne</NavLink>
        </Actions>
    );
}

export default NavNotes;
