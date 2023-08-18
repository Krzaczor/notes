import { useSearchParams } from 'react-router-dom';
import { useCategoriesState } from 'context/categoriesContext';

export const useCategory = () => {
    const { categories } = useCategoriesState();
    const [searchParams] = useSearchParams();

    const categoryId = searchParams.get('c');
    const category = categories.find(({ id }) => id === categoryId)

    return {
        categoryId,
        category,
    };
}