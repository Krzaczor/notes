import { useCategoriesState } from 'context/categoriesContext';
import { closePanelCategories } from 'context/panelCategoriesContext';
import { useCategory } from 'hooks/useCategory';
import CategoryItem from './categoryItem/CategoryItem';
import * as S from './CategoriesList.styles';

const CategoriesList = () => {
    const { categoryId } = useCategory();
    const { categories } = useCategoriesState();

    return (
        <S.CategoriesList>
            <CategoryItem
                name='Wszystkie notatki'
                to='/all'
                isActive={!categoryId}
                onCloseCategory={closePanelCategories}
            />
            {categories.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    name={name}
                    id={id}
                    to={`/all?c=${id}`}
                    isActive={categoryId === id}
                    onCloseCategory={closePanelCategories}
                />
            ))}
        </S.CategoriesList>
    )
}

export default CategoriesList;
