import {
    AdderCategory,
    UpdaterCategory,
    CategoryList,
} from 'types';

export type CreateCategoryAction = (name: AdderCategory) => void;
export type UpdateOneCategoryAction = (id: string, fields: UpdaterCategory) => void;
export type RemoveOneCategoryAction = (id: string) => void;
export type RemoveAllCategoriesAction = () => void;

export interface CategoriesState {
    categories: CategoryList
}
