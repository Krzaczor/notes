import s from './Actions.module.scss';
import { Props } from './Actions.types';

const Actions = (props: Props) => <nav className={s.root} {...props} />

export default Actions;
