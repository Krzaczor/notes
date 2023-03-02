import { useSearchParams } from 'react-router-dom';
import { useCategoriesState } from 'context/categoriesContext';
import { CategoryList } from 'types';

const getCurrentCategory = (categories: CategoryList, params: URLSearchParams) => {
    const categoryId = params.get('c');
    return categories.find(({ id }) => id === categoryId);
}

export const useCategory = () => {
    const { categories } = useCategoriesState();
    const [searchParams] = useSearchParams();

    const category = getCurrentCategory(categories, searchParams);

    return {
        categoryId: category?.id,
        category,
    };
}