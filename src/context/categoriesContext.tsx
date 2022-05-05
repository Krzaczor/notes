import { useState, createContext, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getCategoriesStorage, setCategoriesStorage } from 'storage/categoriesStorage';
import {
    CategoriesActions,
    CategoriesProps,
    CategoriesState,
    CreateCategoryAction,
    RemoveAllCategoriesAction,
    RemoveOneCategoryAction,
    UpdateOneCategoryAction
} from './categoriesContext.types';
import { ErrorStorage, ResetErrorAction, CategoryList } from 'types';

const CategoriesContextState = createContext<CategoriesState>(null!);
const CategoriesContextActions = createContext<CategoriesActions>(null!);

const defaultCategories: CategoryList = [
    {
        id: nanoid(8),
        createAt: new Date(),
        name: 'Wszystkie notatki',
        default: true
    }
];

const initCategories: CategoryList = [...defaultCategories];

export const CategoriesProvider = ({ children }: CategoriesProps) => {
    const [error, setError] = useState<ErrorStorage>(null);
    const [categories, setCategories] = useState<CategoryList>(() => {
        try {
            const categoriesStorage = getCategoriesStorage();
            return categoriesStorage ? categoriesStorage : initCategories;
        } catch (error) {
            setError((error as Error).message);
            return initCategories;
        }
    });

    useEffect(() => {
        setCategoriesStorage(categories);
    }, [categories]);

    const createCategory: CreateCategoryAction = (name) => {
        setCategories(prevCategories => prevCategories.concat({
            id: nanoid(8),
            createAt: new Date(),
            name: name.toString(),
        }))
    }

    const updateOneCategory: UpdateOneCategoryAction = (id, fields) => {
        setCategories(prevCategories => {
            return prevCategories.map(category => {
                if (category.id === id && !category?.default) {
                    return Object.assign(category, fields);
                }

                return category;
            })
        })
    }

    const removeOneCategory: RemoveOneCategoryAction = (id) => {
        setCategories(prevCategories => {
            return prevCategories.filter(category => {
                return category.id !== id || category?.default;
            });
        });
    }

    const removeAllCategories: RemoveAllCategoriesAction = () => {
        setCategories(initCategories);
    }

    const resetError: ResetErrorAction = () => setError(null);

    return (
        <CategoriesContextState.Provider value={{ error, categories }}>
            <CategoriesContextActions.Provider value={{
                createCategory,
                updateOneCategory,
                removeOneCategory,
                removeAllCategories,
                resetError
            }}>
                { children }
            </CategoriesContextActions.Provider>
        </CategoriesContextState.Provider>
    )
}

export const useCategoriesState = () => useContext(CategoriesContextState);
export const useCategoriesActions = () => useContext(CategoriesContextActions);
