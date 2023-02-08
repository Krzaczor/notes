import styled from 'styled-components';
import { MEDIA_POINT_CSS } from 'consts';
import { Props } from './Actions.types';

export const Actions = styled.nav<Props>`
    background-color: var(--color-background-middle);
    padding: 10px var(--padding-container);
    position: fixed;
    width: 100%;

    & > *:not(:last-child) {
        margin-right: 10px;
    }

    @media screen and (min-width: ${MEDIA_POINT_CSS}px) {
        width: calc(100% - 330px);
    }
`;
