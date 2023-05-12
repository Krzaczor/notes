import clsx from 'clsx';
import s from './Button.module.scss';
import { Props } from './Button.types';
import { forwardRef } from 'react';

const variants = {
    primary: 'primary',
    second: 'second',
    'outline-danger': 'outline-danger',
    'dark': 'dark',
}

const sizes = {
    'normal': 'normal',
    'lg': 'lg',
}

const Button = forwardRef<HTMLButtonElement, Props>(({
    children,
    variant,
    size,
    fluid,
    onClick,
}, ref) => {
    return (
        <button
            ref={ref} 
            onClick={onClick}
            className={clsx(s.root, {
                [s[variant!]]: variant && variant in variants,
                [s[size!]]: size && size in sizes,
                [s.fluid]: fluid,
            })}
        >{ children }</button>
    )
})

export default Button;
