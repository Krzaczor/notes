import { useCategoriesState } from 'context/categoriesContext';
import { useSearchParams } from 'react-router-dom';

export const useCategory = () => {
    const { categories } = useCategoriesState();
    const [searchParams] = useSearchParams();

    const categoryId = searchParams.get('c');
    const currentCategory = categories.find(category => category.id === categoryId);

    return {
        categoryId,
        currentCategory,
    };
}