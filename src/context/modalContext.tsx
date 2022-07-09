import { createContext, useContext, useState, ReactNode } from 'react';

interface ListState {
    showModal: boolean;
}

interface ListActions {
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

const ListContextState = createContext<ListState>(null!);
const ListContextActions = createContext<ListActions>(null!);

interface Props {
    children: ReactNode;
}

const initListState = {
    showModal: false,
}

export const ListProvider = ({ children }: Props) => {
    const [state, setState] = useState(initListState);

    const handleOpenModal = () => setState(prev => ({
        ...prev,
        showModal: true,
    }));

    const handleCloseModal = () => setState(prev => ({
        ...prev,
        showModal: false,
    }));

    return (
        <ListContextState.Provider value={state}>
            <ListContextActions.Provider value={{
                handleOpenModal,
                handleCloseModal
            }}>
                { children }
            </ListContextActions.Provider>
        </ListContextState.Provider>
    )
}

export const useListContextState = () => useContext(ListContextState);
export const useListContextActions = () => useContext(ListContextActions);
