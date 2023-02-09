import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCategoriesState } from 'context/categoriesContext';
import { Category, CategoryList } from 'types';

const getCurrentCategory = (categories: CategoryList, params: URLSearchParams) => {
    const categoryId = params.get('c');
    return categories.find(({ id }) => id === categoryId);
}

export const useCategory = () => {
    const { categories } = useCategoriesState();
    const [searchParams] = useSearchParams();

    const [category, setCategory] = useState<Category | undefined>(() => {
        return getCurrentCategory(categories, searchParams);
    });

    useEffect(() => {
        setCategory(getCurrentCategory(categories, searchParams));
    }, [searchParams, categories]);

    return {
        categoryId: category?.id,
        category,
    };
}