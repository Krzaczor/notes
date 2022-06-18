import { useCategoriesState } from 'context/categoriesContext';
import { useCategory } from 'hooks/useCategory';
import CategoryItem from './categoryItem/CategoryItem';
import * as S from './CategoriesList.styles';

const CategoriesList = () => {
    const { categories } = useCategoriesState();
    const { categoryId } = useCategory();

    return (
        <S.CategoriesList>
            <CategoryItem
                name='Wszystkie zadania'
                to='/all'
                isActive={!categoryId}
            />
            {categories.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    name={name}
                    to={`/all?c=${id}`}
                    isActive={categoryId === id}
                />
            ))}
        </S.CategoriesList>
    )
}

export default CategoriesList;
