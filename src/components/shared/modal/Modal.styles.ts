import styled from 'styled-components';

export const ModalContainer = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
`;

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    position: fixed;
    width: 100%;
`;

export const Modal = styled.div`
    background-color: var(--color-background);
    border-radius: var(--radius);
    color: var(--color-text);
    max-height: calc(100% - 40px);
    overflow-y: auto;
    padding: 20px;
    width: min(80%, 25em);
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