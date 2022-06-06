import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCategoriesState } from 'context/categoriesContext';
import { Category } from 'types';

export const useCategory = () => {
    const { categories } = useCategoriesState();
    const [searchParams] = useSearchParams();

    const [category, setCategory] = useState<Category | undefined>(undefined);

    useEffect(() => {
        const searchCategory = () => {
            const categoryId = searchParams.get('c');
            const currentCategory = categories.find(category => category.id === categoryId);
            
            setCategory(currentCategory);
        }

        searchCategory();
    }, [searchParams, categories]);

    return {
        categoryId: category?.id,
        currentCategory: category,
    };
}