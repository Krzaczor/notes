import { ReactNode } from 'react';

export interface Props {
    show: boolean;
    onClose: () => void;
    title: string;
    animateFrom: 'left' | 'right';
    children: ReactNode;
    showOverlay?: boolean;
}
