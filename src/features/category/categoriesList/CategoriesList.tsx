import { useCategoriesState } from 'context/categoriesContext';
import { closePanelCategories } from 'context/panelCategoriesContext';
import { useCategory } from 'hooks/useCategory';
import CategoryItem from '../categoryItem/CategoryItem';
import { basePath } from 'config/router';
import s from './CategoriesList.module.scss';

const CategoriesList = () => {
    const { categoryId } = useCategory();
    const { categories } = useCategoriesState();

    return (
        <ul className={s.root}>
            {categories.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    name={name}
                    id={id}
                    to={`${basePath}?c=${id}`}
                    isActive={categoryId === id}
                    onCloseCategory={closePanelCategories}
                />
            ))}
        </ul>
    )
}

export default CategoriesList;
