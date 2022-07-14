import styled from 'styled-components';
import { mediaPointCSS } from 'consts';

export const NoteForm = styled.form`
    align-items: stretch;
    background-color: var(--color-background);
    display: flex;
    padding: var(--padding-container);
    position: fixed;
    bottom: 0;
    width: 100%;

    & > *:not(:last-child) {
        margin-right: 10px;
    }

    @media screen and (min-width: ${mediaPointCSS}px) {
        width: calc(100% - 330px);
    }
`;
