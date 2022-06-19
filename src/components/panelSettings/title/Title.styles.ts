import styled from 'styled-components';

export const Title = styled.p`
    border-bottom: 1px solid var(--color-background-darkest);
    font-size: 20px;
    line-height: 60px;
    text-align: center;

    &:first-letter {
        text-transform: uppercase;
    }
`;
