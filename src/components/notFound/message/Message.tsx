import s from './Message.module.scss';

interface Props {
    children: string;
}

const Message = ({ children }: Props) => {
    return (
        <p className={s.root}>{ children }</p>
    )
}

export default Message;
