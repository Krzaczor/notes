import styled from 'styled-components';

export const CategoryItem = styled.li`
    display: flex;
    min-height: 50px;

    & > :first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        white-space: nowrap;
        width: 100%;
    }
`
