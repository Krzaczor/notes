import styled from 'styled-components';

export const MoreOptions = styled.div`
    position: relative;
    display: inline-block;
`;

export const Options = styled.div`
    background-color: var(--color-background-darkest);
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
        border: none;
        cursor: pointer;
        text-align: left;
        white-space: nowrap;
    }
`
