import styled from 'styled-components';

export const NoteNotFound = styled.div`
    align-items: center;
    color: var(--color-text);
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    & > *:not(:last-child) {
        margin-bottom: 15px;
    }
`;
