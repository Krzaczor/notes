import styled from 'styled-components';

export const MoreOptions = styled.div`
    position: relative;
    display: inline-block;
`;

export const Options = styled.div`
    align-content: center;
    background-color: var(--color-background-darkest);
    border-radius: var(--radius);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: var(--padding-container);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;

    & > * {
        cursor: pointer;
        text-align: left;
        white-space: nowrap;
    }

    & > *:not(:last-child) {
        margin-bottom: 5px;
    }
`
