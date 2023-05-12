import { ChangeEvent, FormEvent, useState } from 'react';
import { useCategoriesActions } from 'context/categoriesContext';
import { useCategory } from 'hooks/useCategory';
import useOnClickEsc from 'hooks/useOnClickEsc';
import Input from 'components/shared/input/Input';
import s from './CategoryName.module.css';
import { Category } from 'types';

interface NameEditProps {
    onStopEdit: () => void;
    category: Category | undefined;
}

const CategoryNameEdit = ({ category, onStopEdit }: NameEditProps) => {
    const [tempValue, setTempValue] = useState(() => category?.name || '');
    const { updateOneCategory } = useCategoriesActions();

    const handleTempValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTempValue(event.target.value);
    }

    const handleUpdateNameCategory = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!category) return;

        if (tempValue.trim() === '') {
            return;
        }

        updateOneCategory(category.id, {
            name: tempValue.trim(),
        });

        onStopEdit();
    }

    useOnClickEsc(onStopEdit);

    return (
        <form onSubmit={handleUpdateNameCategory} style={{ flex: 1 }}>
            <Input value={tempValue} onChange={handleTempValue} onBlur={onStopEdit} autoFocus />
        </form>
    )
}

const CategoryName = () => {
    const [isEdit, setIsEdit] = useState(false);
    const { category } = useCategory();

    const handleStartEdit = () => {
        setIsEdit(true);
    }

    const handleStopEdit = () => {
        setIsEdit(false);
    }

    if (!category) {
        return (
            <h1 className={s.root}>Wszystkie notatki</h1>
        );
    }

    if (isEdit) {
        return (
            <CategoryNameEdit
                category={category}
                onStopEdit={handleStopEdit}
            />
        )
    }

    return (
        <h1
            className={s.root}
            tabIndex={0}
            onClick={handleStartEdit}
        >
            { category.name }
        </h1>
    )
}

export default CategoryName;
