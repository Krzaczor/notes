import { useRef } from 'react';
import { useFocus } from 'hooks/useFocus';
import useOnClickOutside from 'hooks/useOnClickOutside';
import * as S from './MoreOptions.styles';
import { OptionsProps, Props } from './MoreOptions.types';

const Options = ({ show, onClose, listRef, children }: OptionsProps) => {
    const focus = useFocus(show, onClose);

    useOnClickOutside(listRef, onClose);

    return (
        <S.Options style={{ transform: `translateY(40px)` }} {...focus}>{ children }</S.Options>
    )
}

const MoreOptions = ({ show, onClose, element, children }: Props) => {
    const listRef = useRef<HTMLDivElement>(null!);

    return (
        <S.MoreOptions ref={listRef}>
            { element }
            { show && (
                <Options
                    listRef={listRef}
                    onClose={onClose}
                    show={show}
                >
                    { children }
                </Options>
            ) }
        </S.MoreOptions>
    )
}

export default MoreOptions;
