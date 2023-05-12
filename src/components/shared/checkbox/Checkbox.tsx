import { useId } from 'react';
import s from './Checkbox.module.scss';

interface Props {
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ checked, onChange }: Props) => {
    const id = useId();

    return (
        <>
            <input
                className={s.root}
                type='checkbox'
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label className={s.label} htmlFor={id} />
        </>
    )
}

export default Checkbox;
