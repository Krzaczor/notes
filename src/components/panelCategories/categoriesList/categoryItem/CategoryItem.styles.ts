import styled from 'styled-components';

export const CategoryItem = styled.li`
    align-items: center;
    border-radius: var(--radius);
    display: flex;
    min-height: 50px;

    & > :first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        white-space: nowrap;
        width: 100%;
    }

    &.active {
        background-color: var(--color-background-darkest);
    }
`
