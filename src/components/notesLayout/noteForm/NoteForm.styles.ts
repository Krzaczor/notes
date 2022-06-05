import styled from 'styled-components';

export const NoteForm = styled.form`
    align-items: stretch;
    background-color: var(--color-background);
    display: flex;
    padding: var(--padding-container);

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;
