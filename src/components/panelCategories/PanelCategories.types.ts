import { ReactNode } from 'react';

export interface Props {
    children: ReactNode;
    show: boolean;
    onClose: () => void;
}
