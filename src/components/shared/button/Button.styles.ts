import styled, { css } from 'styled-components';
import { Props } from './Button.types';

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

export const Button = styled.button<Props>`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--radius);
    color: var(--color-text);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    padding: 0.5rem;
    vertical-align: middle;

    & svg {
        vertical-align: middle;
    }

    ${({ variant }) => variant && variant in variants ? variants[variant] : null};
    ${({ size }) => size && size in sizes ? sizes[size] : null};
    ${({ fluid }) => fluid ? fluids : null};
`;