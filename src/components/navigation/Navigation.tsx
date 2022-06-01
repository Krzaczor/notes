import { Props } from './Navigation.types';
import * as S from './Navigation.styles';

const Navigation = ({ children }: Props) => {
    return (
        <S.Navigation>
            { children }
        </S.Navigation>
    )
}

export default Navigation;