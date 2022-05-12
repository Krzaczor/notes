import styled from 'styled-components';
import { Props } from './Actions.types';

export const Actions = styled.nav<Props>`
    background-color: var(--color-background-middle);
    padding: 10px var(--padding-container);

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;
