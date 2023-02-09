import { ChangeEvent, FormEvent, useState } from 'react';
import { useCategoriesActions } from 'context/categoriesContext';
import { useCategory } from 'hooks/useCategory';
import useOnClickEsc from 'hooks/useOnClickEsc';
import Input from 'components/shared/input/Input';
import * as S from './CategoryName.styles';
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
            <S.CategoryName>Wszystkie notatki</S.CategoryName>
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
        <S.CategoryName
            tabIndex={0}
            onClick={handleStartEdit}
        >
            { category.name }
        </S.CategoryName>
    )
}

export default CategoryName;
