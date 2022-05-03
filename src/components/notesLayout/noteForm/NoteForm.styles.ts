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

export const Input = styled.input`
    background-color: var(--color-input-background);
    border: none;
    border-radius: var(--radius);
    color: var(--color-text);
    font-size: 1rem;
    padding: 0.7rem;
    width: 100%;

    &::placeholder {
        color: var(--color-input-text);
    }
`;