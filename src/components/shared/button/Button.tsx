import { FC } from 'react';
import * as S from './Button.styles';
import { Props } from './Button.types';

const Button: FC<Props> = (props) => <S.Button {...props} />

export default Button;
