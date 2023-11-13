import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export interface Props extends LinkProps {
    children: ReactNode;
    variant?: 'primary' | 'second' | 'outline-danger' | 'dark';
    size?: 'normal' | 'lg';
    fluid?: boolean;
    onClick?: () => void;
}
