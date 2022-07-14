import styled from 'styled-components';
import { mediaPointCSS } from 'consts';
import { Props } from './Actions.types';

export const Actions = styled.nav<Props>`
    background-color: var(--color-background-middle);
    padding: 10px var(--padding-container);
    position: fixed;
    width: 100%;

    & > *:not(:last-child) {
        margin-right: 10px;
    }

    @media screen and (min-width: ${mediaPointCSS}px) {
        width: calc(100% - 330px);
    }
`;
