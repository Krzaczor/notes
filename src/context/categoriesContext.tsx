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
            categories: [],
        }),
        {
            name: 'notes/categories'
        }
    )
)

const createCategory: CreateCategoryAction = (category) => {
    useCategoriesState.setState(state => ({
        categories: state.categories.concat({
            id: nanoid(8),
            createAt: new Date(),
            name: category.name,
        })
    }))
}

const updateOneCategory: UpdateOneCategoryAction = (id, fields) => {
    useCategoriesState.setState(state => ({
        categories: state.categories.map(category => {
            if (category.id === id) {
                return Object.assign(category, fields);
            }

            return category;
        })
    }))
}

const removeOneCategory: RemoveOneCategoryAction = (id) => {
    useCategoriesState.setState(state => ({
        categories: state.categories.filter(category => {
            return category.id !== id;
        })
    }));
}

const removeAllCategories: RemoveAllCategoriesAction = () => {
    useCategoriesState.setState({
        categories: initCategories
    });
}

export const useCategoriesActions = () => ({
    createCategory,
    updateOneCategory,
    removeOneCategory,
    removeAllCategories
})

// import { useState, createContext, useContext, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { getCategoriesStorage, setCategoriesStorage } from 'storage/categoriesStorage';
// import {
//     CategoriesActions,
//     CategoriesProps,
//     CategoriesState,
//     CreateCategoryAction,
//     RemoveAllCategoriesAction,
//     RemoveOneCategoryAction,
//     UpdateOneCategoryAction
// } from './categoriesContext.types';
// import { ErrorStorage, ResetErrorAction, CategoryList } from 'types';

// export const useCategoriesActions = () => useContext(CategoriesContextActions);
