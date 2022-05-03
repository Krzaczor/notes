import styled from 'styled-components';

export const Navigation = styled.nav`
    background-color: var(--color-background-darkest);
    color: var(--color-text);
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px var(--padding-container);

    & > *:not(:last-child) {
        margin-right: 15px;
    }
`;

export const CategoryName = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;
