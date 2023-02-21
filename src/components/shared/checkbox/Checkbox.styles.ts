import styled from 'styled-components';

export const Checkbox = styled.label`
    background-color: var(--color-gray);
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    height: 30px;
    position: relative;
    width: 64px;

    &:before {
        background-color: var(--color-background-middle);
        border-radius: 50px;
        content: '';
        height: 22px;
        position: absolute;
        top: 50%;
        transition: all 0.1s linear;
        width: 22px;
    }
`;

export const Input = styled.input`
    opacity: 0;
    position: absolute;

    &:checked+${Checkbox} {
        background-color: var(--color-primary);
    }

    &:not(:checked)+${Checkbox}:before {
        transform: translate(3px, -50%);
    }

    &:checked+${Checkbox}:before {
        transform: translate(36px, -50%);
    }

    &:focus+${Checkbox} {
        outline: auto;
    }
`;