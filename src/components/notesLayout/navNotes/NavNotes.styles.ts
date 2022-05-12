import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--radius);
    color: var(--color-text);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    min-width: 40px;
    padding: 0.5rem;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;

    &.active {
        background-color: var(--color-background-darkest);
        color: var(--color-text);
    }
`;
