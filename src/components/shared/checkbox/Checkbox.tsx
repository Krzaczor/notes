import { useId } from 'react';
import * as S from './Checkbox.styles';

interface Props {
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ checked, onChange }: Props) => {
    const id = useId();

    return (
        <>
            <S.Input
                type='checkbox'
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <S.Checkbox htmlFor={id}></S.Checkbox>
        </>
    )
}

export default Checkbox;
