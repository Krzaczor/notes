import styled from 'styled-components';
import { Props } from './Main.types';

export const Main = styled.main<Props>`
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    margin-top: 60px;
    padding-bottom: 60px;
`;
