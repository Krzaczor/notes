import styled from 'styled-components';

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
