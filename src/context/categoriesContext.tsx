import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';
import {
    CategoriesState,
    CreateCategoryAction,
    RemoveAllCategoriesAction,
    RemoveOneCategoryAction,
    UpdateOneCategoryAction
} from './categoriesContext.types';
import { CategoryList } from 'types';

const initCategories: CategoryList = [];

export const useCategoriesState = create(
    persist<CategoriesState>(
        () => ({
            categories: initCategories,
        }),
        {
            name: 'notes/categories'
        }
    )
)

export const createCategory: CreateCategoryAction = (category) => {
    useCategoriesState.setState(state => ({
        categories: state.categories.concat({
            id: nanoid(8),
            createAt: new Date(),
            name: category.name,
        })
    }))
}

export const updateOneCategory: UpdateOneCategoryAction = (id, fields) => {
    useCategoriesState.setState(state => ({
        categories: state.categories.map(category => {
            if (category.id === id) {
                return Object.assign(category, fields);
            }

            return category;
        })
    }))
}

export const removeOneCategory: RemoveOneCategoryAction = (id) => {
    useCategoriesState.setState(state => ({
        categories: state.categories.filter(category => {
            return category.id !== id;
        })
    }));
}

export const removeAllCategories: RemoveAllCategoriesAction = () => {
    useCategoriesState.setState({
        categories: initCategories
    });
}
