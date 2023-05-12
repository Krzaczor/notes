import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Link from 'components/shared/link/Link';
import { useCategoriesActions } from 'context/categoriesContext';
import Modal from 'components/shared/modal/Modal';
import Button from 'components/shared/button/Button';
import s from './CategoryItem.module.scss';
import { Props } from './CategoryItem.types';
import { useNotesActions, useNotesState } from 'context/notesContext';
import clsx from 'clsx';

const CategoryItem = ({ id, name, isActive, to, onCloseCategory }: Props) => {
    const [toRemove, setToRemove] = useState(false);
    const { removeOneCategory } = useCategoriesActions();
    const { notes } = useNotesState();
    const { removeManyNotes } = useNotesActions();

    const handleToRemove = () => {
        setToRemove(true);
    }

    const handleBackRemove = () => {
        setToRemove(false);
    }

    const handleConfirm = () => {
        if (!id) return;

        const notesIdToNotes = notes
            .filter(note => note.category === id)
            .map(note => note.id);

        removeOneCategory(id);
        removeManyNotes(notesIdToNotes);
        setToRemove(false);
    }

    const handleCloseCategory = () => {
        setTimeout(onCloseCategory, 200);
    }

    return (
        <li className={clsx(s.root, { [s.active]: isActive })}>
            <Link
                to={to}
                onClick={handleCloseCategory}
            >
                { name }
            </Link>
            { id && <Button onClick={handleToRemove}>
                <FaTrash size={20} color='var(--color-danger)' />
            </Button> }
            <Modal
                show={toRemove}
                title='Usuń kategorie'
                message='Utracisz notatki należące do tej kategorii.'
                contentCancel='Jednak nie'
                contentConfirm='Usuwam'
                onCancel={handleBackRemove}
                onConfirm={handleConfirm}
            />
        </li>
    )
}

export default CategoryItem;
