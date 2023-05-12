import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Link.module.scss';
import { Props } from './Link.types';

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

const Link = forwardRef<HTMLAnchorElement, Props>(({
    children,
    variant,
    size,
    fluid,
    to
}, ref) => {
    return (
        <RouterLink
            to={to}
            ref={ref}
            className={clsx(s.root, {
                [s[variant!]]: variant && variant in variants,
                [s[size!]]: size && size in sizes,
                [s.fluid]: fluid,
            })}
        >{ children }</RouterLink>
    )
})

export default Link;
