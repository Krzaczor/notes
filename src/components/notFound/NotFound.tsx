import { ReactNode } from 'react';
import * as S from './NotFound.styles';

interface Props {
    children: ReactNode;
}

const NotFound = ({ children }: Props) => {
    return (
        <S.NotFound>{ children }</S.NotFound>
    )
}

export default NotFound;
