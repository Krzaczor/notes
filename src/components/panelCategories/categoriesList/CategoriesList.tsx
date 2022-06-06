import { useCategoriesState } from 'context/categoriesContext';
import { useCategory } from 'hooks/useCategory';
import CategoryItem from './categoryItem/CategoryItem';
import * as S from './CategoriesList.styles';

const CategoriesList = () => {
    const { categories } = useCategoriesState();
    const { currentCategory } = useCategory();

    return (
        <S.CategoriesList>
            {categories.map(category => (
                <CategoryItem
                    key={category.id}
                    category={category}
                    currentCategory={currentCategory}
                />
            ))}
        </S.CategoriesList>
    )
}

export default CategoriesList;
