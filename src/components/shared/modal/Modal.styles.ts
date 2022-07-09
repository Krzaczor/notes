import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
    background-color: var(--color-background);
    border-radius: 5px;
    color: var(--color-text);
    min-width: 300px;
    max-width: 60%;
    max-height: calc(100% - 40px);
    overflow-y: auto;
    padding: 20px;
    z-index: 21;

    & > *:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const Header = styled.p`
    font-size: 1.5rem;
`;

export const Body = styled.p`
    font-size: 1rem;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`;