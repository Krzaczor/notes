import styled from 'styled-components';
import { MEDIA_POINT_CSS } from 'consts';

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

    @media screen and (min-width: ${MEDIA_POINT_CSS}px) {
        width: calc(100% - 330px);
    }
`;
