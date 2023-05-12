import { ReactNode } from 'react';
import Main from 'components/shared/main/Main';
import s from './NotFound.module.scss';

interface Props {
    children: ReactNode;
}

const NotFound = ({ children }: Props) => {
    return (
        <Main className={s.root}>{ children }</Main>
    )
}

export default NotFound;
