import styled from 'styled-components';
import { mediaPointCSS } from 'consts';

export const Navigation = styled.nav`
    align-items: center;
    background-color: var(--color-background-darkest);
    color: var(--color-text);
    display: flex;
    height: 60px;
    padding: 10px var(--padding-container);
    position: fixed;
    width: 100%;

    & > *:not(:last-child) {
        margin-right: 15px;
    }

    @media screen and (min-width: ${mediaPointCSS}px) {
        width: calc(100% - 330px);
    }
`;
