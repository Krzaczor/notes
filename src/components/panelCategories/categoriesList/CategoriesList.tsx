import { useCategoriesState } from 'context/categoriesContext';
import CategoryItem from './categoryItem/CategoryItem';
import * as S from './CategoriesList.styles';

interface Props {
    categoryId: string | undefined;
}

const CategoriesList = ({ categoryId }: Props) => {
    const { categories } = useCategoriesState();

    return (
        <S.CategoriesList>
            <CategoryItem
                name='Wszystkie notatki'
                to='/all'
                isActive={!categoryId}
            />
            {categories.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    name={name}
                    id={id}
                    to={`/all?c=${id}`}
                    isActive={categoryId === id}
                />
            ))}
        </S.CategoriesList>
    )
}

export default CategoriesList;
