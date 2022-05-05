import { ReactNode } from 'react';
import {
    AdderCategory,
    UpdaterCategory,
    CategoryList,
    ErrorStorage,
    ResetErrorAction
} from 'types';

export type CreateCategoryAction = (name: AdderCategory) => void;
export type UpdateOneCategoryAction = (id: string, fields: UpdaterCategory) => void;
export type RemoveOneCategoryAction = (id: string) => void;
export type RemoveAllCategoriesAction = () => void;

export interface CategoriesState {
    error: ErrorStorage;
    categories: CategoryList
}

export interface CategoriesActions {
    createCategory: CreateCategoryAction;
    updateOneCategory: UpdateOneCategoryAction;
    removeOneCategory: RemoveOneCategoryAction;
    removeAllCategories: RemoveAllCategoriesAction;
    resetError: ResetErrorAction
}

export interface CategoriesProps {
    children: ReactNode
}
