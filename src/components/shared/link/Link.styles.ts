// import { NavLink } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Props } from './Link.types';

const variants = {
    'primary': css`
        background-color: var(--color-primary);
        color: var(--color-light);
    `,
    'second': css`
        background-color: var(--color-background);
        color: var(--color-light);
    `,
    'outline-danger': css`
        border-color: var(--color-danger);
        color: var(--color-text);
    `,
    'dark': css`
        background-color: var(--color-background-darkest);
        color: var(--color-text);
    `,
}

const sizes = {
    'normal': css`
        font-size: 1rem;
        padding: 0.5rem;
    `,
    'lg': css`
        font-size: 1.1rem;
        padding: 0.7rem;
    `
}

const fluids = css`
    width: 100%;
`;

export const Link = styled(RouterLink)<Props>`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--radius);
    color: var(--color-text);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    padding: 0.5rem;
    text-decoration: none;
    vertical-align: middle;

    & svg {
        vertical-align: middle;
    }

    &.active {
        background-color: var(--color-background-darkest);
    }

    ${({ variant }) => variant && variant in variants ? variants[variant] : null};
    ${({ size }) => size && size in sizes ? sizes[size] : null};
    ${({ fluid }) => fluid ? fluids : null};
`;
