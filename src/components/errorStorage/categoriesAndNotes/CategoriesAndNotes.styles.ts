import styled from 'styled-components';

export const CategoriesAndNotes = styled.main`
    align-items: center;
    background-color: var(--color-background);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const Message = styled.p`
    line-height: 1.5em;
`;
