import { ReactNode } from 'react';

export interface Props {
    variant?: 'primary' | 'second' | 'outline-danger';
    size?: 'normal' | 'lg';
    fluid?: boolean;
    children: ReactNode
}
