import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NoteItem = styled.li`
    align-items: center;
    display: flex;
    height: 60px;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;

export const NoteLink = styled(Link)`
    color: var(--color-text);
    line-height: 2.5em;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
`;
