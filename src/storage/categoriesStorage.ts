import { getItem, setItem } from './storage';
import { CategoryList } from 'types';

const name = 'notes/categories';

export const getCategoriesStorage = (): CategoryList | null => {
    return getItem(name);
}

export const setCategoriesStorage = (value: CategoryList) => {
    setItem(name, value);
}
