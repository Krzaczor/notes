import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
    return <input className={clsx(s.root, className)} {...props} />
}

export default Input;
