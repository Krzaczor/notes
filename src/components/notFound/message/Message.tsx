import * as S from './Message.styles';

interface Props {
    children: string;
}

const Message = ({ children }: Props) => {
    return (
        <S.Message>{ children }</S.Message>
    )
}

export default Message;
