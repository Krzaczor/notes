import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Link from 'features/shared/link/Link';
import { removeOneCategory } from 'context/categoriesContext';
import Modal from 'features/shared/modal/Modal';
import Button from 'features/shared/button/Button';
import s from './CategoryItem.module.scss';
import { Props } from './CategoryItem.types';
import { removeManyNotes, useNotesState } from 'context/notesContext';
import clsx from 'clsx';

const CategoryItem = ({ id, name, isActive, to, onCloseCategory }: Props) => {
    const [toRemove, setToRemove] = useState(false);
    const noteIds = useNotesState(
        state => state.notes.filter(note => note.category === id).map(note => note.id)
    );

    const handleToRemove = () => {
        setToRemove(true);
    }

    const handleBackRemove = () => {
        setToRemove(false);
    }

    const handleConfirm = () => {
        removeOneCategory(id);
        removeManyNotes(noteIds);
        setToRemove(false);
    }

    return (
        <li className={clsx(s.root, { [s.active]: isActive })}>
            <Link
                to={to}
                onClick={onCloseCategory}
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
