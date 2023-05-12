import clsx from 'clsx';
import s from './Main.module.scss';
import { Props } from './Main.types';

const Main = ({ children, className }: Props) => {
    return (
        <main className={clsx(s.root, className)}>{ children }</main>
    )
}

export default Main;
