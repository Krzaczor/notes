import { ReactElement, ReactNode, RefObject } from 'react';

export interface Props {
    show: boolean;
    children: ReactNode;
    element: ReactElement;
    onClose: () => void;
}

export interface OptionsProps {
    listRef: RefObject<HTMLDivElement>;
    children: ReactNode;
    onClose: () => void;
}
