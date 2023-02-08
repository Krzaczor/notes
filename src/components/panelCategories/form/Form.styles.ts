import styled from 'styled-components';

export const Form = styled.form`
    align-items: stretch;
    display: flex;
    padding: var(--padding-container);

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;
