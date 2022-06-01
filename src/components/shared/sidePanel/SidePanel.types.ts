import { ReactNode } from 'react';

export interface Props {
    show: boolean;
    onClose: () => void;
    animateFrom: 'left' | 'right';
    children: ReactNode;
    showOverlay?: boolean;
}
