import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { RiMore2Fill } from 'react-icons/ri';
import clsx from 'clsx';
import { getUrlCategory } from 'utils/getUrlCategory';
import { updateManyNotes, removeManyNotes, useNotesState } from 'context/notesContext';
import { useCategory } from 'hooks/useCategory';
import Actions from 'features/shared/actions/Actions';
import Button from 'features/shared/button/Button';
import MoreOptions from 'features/shared/moreOptions/MoreOptions';
import { basePath, priorityPath, undonePath } from 'config/router';
import s from './NavNotes.module.scss';

const getClassesLink = (p: { isActive: boolean }) => {
    return clsx(s.link, { [s.active]: p.isActive });
}

const NavNotes = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const { categoryId } = useCategory();
    const notes = useNotesState(
        state => categoryId ? state.notes.filter(note => note.category === categoryId) : state.notes, 
        shallow
    );
    const notesIds = notes.map(note => note.id);
    const btnRef = useRef<HTMLButtonElement>(null!);

    const handleToggleMoreOptions = () => {
        setShowMoreOptions(prev => !prev);
    }

    const handleCloseMoreOptions = () => {
        setShowMoreOptions(false);
    }

    const handleRemoveAllNotes = () => {
        removeManyNotes(notesIds);
    }

    const handlePriorityAllNotes = () => {
        updateManyNotes(notesIds, { priority: true });
    }

    const handleUnpriorityAllNotes = () => {
        updateManyNotes(notesIds, { priority: false });
    }

    const handleDoneAllNotes = () => {
        updateManyNotes(notesIds, { done: new Date() });
    }

    const handleUndoneAllNotes = () => {
        updateManyNotes(notesIds, { done: null });
    }

    return (
        <Actions>
            <MoreOptions
                show={showMoreOptions}
                onClose={handleCloseMoreOptions}
                element={(
                    <Button ref={btnRef} onClick={handleToggleMoreOptions}>
                        <RiMore2Fill size={24} />
                    </Button>
                )}
            >
                <Button fluid onClick={handlePriorityAllNotes}>oznacz zadania jako ważne</Button>
                <Button fluid onClick={handleUnpriorityAllNotes}>oznacz zadania jako nieważne</Button>
                <Button fluid onClick={handleDoneAllNotes}>oznacz zadania jako zatwierdzone</Button>
                <Button fluid onClick={handleUndoneAllNotes}>oznacz zadania jako niezatwierdzone</Button>
                <Button fluid variant='outline-danger' onClick={handleRemoveAllNotes}>usuń wszystkie zadania</Button>
            </MoreOptions>
            <NavLink className={getClassesLink} to={getUrlCategory(basePath, categoryId)} replace>ogółem</NavLink>
            <NavLink className={getClassesLink} to={getUrlCategory(undonePath, categoryId)} replace>nie zrobione</NavLink>
            <NavLink className={getClassesLink} to={getUrlCategory(priorityPath, categoryId)} replace>ważne</NavLink>
        </Actions>
    );
}

export default NavNotes;
