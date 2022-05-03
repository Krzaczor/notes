import styled from 'styled-components';

export const NavNotes = styled.nav`
    background-color: var(--color-background-middle);
    padding: 10px var(--padding-container);

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;
