import { ReactNode } from 'react';

export interface Props {
    children: ReactNode;
    variant?: 'primary' | 'second' | 'outline-danger' | 'dark';
    size?: 'normal' | 'lg';
    fluid?: boolean;
    href?: string;
    onClick?: () => void;
}
