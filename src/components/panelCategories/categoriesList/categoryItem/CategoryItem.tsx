import Link from 'components/shared/link/Link';
import { useCategoriesActions } from 'context/categoriesContext';
import Button from 'components/shared/button/Button';
import * as S from './CategoryItem.styles';
import { Props } from './CategoryItem.types';

const CategoryItem = ({ category, currentCategory }: Props) => {
    const { removeOneCategory } = useCategoriesActions();
    
    const handlerRemoveCategory = () => {
        removeOneCategory(category.id);
    }

    const isActive = currentCategory?.id === category.id;

    return (
        <S.CategoryItem>
            <Link
                key={category.id}
                to={`/all?c=${category.id}`}
                className={isActive ? 'active' : ''}
            >
                { category.name }
            </Link>
            <Button onClick={handlerRemoveCategory}>u</Button>
        </S.CategoryItem>
    )
}

export default CategoryItem;
