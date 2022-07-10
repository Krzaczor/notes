import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useListContextActions, useListContextState } from 'context/modalContext';
import Link from 'components/shared/link/Link';
import { useCategoriesActions } from 'context/categoriesContext';
import Modal from 'components/shared/modal/Modal';
import Button from 'components/shared/button/Button';
import * as S from './CategoryItem.styles';
import { Props } from './CategoryItem.types';

const CategoryItem = ({ id, name, isActive, to, onCloseCategory }: Props) => {
    const [toRemove, setToRemove] = useState(false);
    const { removeOneCategory } = useCategoriesActions();
    const { showModal } = useListContextState();
    const { handleOpenModal, handleCloseModal } = useListContextActions();

    const handleToRemove = () => {
        setToRemove(true);
        handleOpenModal();
    }

    const handleBackRemove = () => {
        setToRemove(false);
        handleCloseModal();
    }

    const handleConfirm = () => {
        if (!id) return;

        removeOneCategory(id);
        setToRemove(false);
        handleCloseModal();
    }

    const handleCloseCategory = () => {
        setTimeout(onCloseCategory, 200);
    }

    return (
        <S.CategoryItem
            className={isActive ? 'active' : ''}
        >
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
                show={showModal && toRemove}
                title='Usuń kategorie'
                message='Utracisz notatki należące do tej kategorii.'
                contentCancel='Jednak nie'
                contentConfirm='Usuwam'
                onCancel={handleBackRemove}
                onConfirm={handleConfirm}
            />
        </S.CategoryItem>
    )
}

export default CategoryItem;
