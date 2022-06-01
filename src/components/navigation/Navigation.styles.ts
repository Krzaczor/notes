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
