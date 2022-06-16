import Link from 'components/shared/link/Link';
import { useCategoriesActions } from 'context/categoriesContext';
import Button from 'components/shared/button/Button';
import * as S from './CategoryItem.styles';
import { Props } from './CategoryItem.types';

const CategoryItem = ({ id, name, isActive, to }: Props) => {
    const { removeOneCategory } = useCategoriesActions();

    return (
        <S.CategoryItem>
            <Link
                to={to}
                className={isActive ? 'active' : ''}
            >
                { name }
            </Link>
            { id && <Button onClick={() => removeOneCategory(id)}>u</Button> }
        </S.CategoryItem>
    )
}

export default CategoryItem;
