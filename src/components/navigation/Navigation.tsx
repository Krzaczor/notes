import { Props } from './Navigation.types';
import s from './Navigation.module.scss';

const Navigation = ({ children }: Props) => {
    return (
        <nav className={s.root}>
            { children }
        </nav>
    )
}

export default Navigation;