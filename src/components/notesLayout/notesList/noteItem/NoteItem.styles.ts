import styled from 'styled-components';

export const NoteItem = styled.li`
    display: flex;
    align-items: center;
    height: 60px;

    & > *:not(:last-child) {
        margin-right: 20px;
    }
`;