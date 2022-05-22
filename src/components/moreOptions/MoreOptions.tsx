import { useRef } from 'react';
import useOnClickEsc from 'hooks/useOnClickEsc';
import useOnClickOutside from 'hooks/useOnClickOutside';
import * as S from './MoreOptions.styles';
import { OptionsProps, Props } from './MoreOptions.types';

const Options = ({ onClose, listRef, children }: OptionsProps) => {
    useOnClickEsc(onClose);
    useOnClickOutside(listRef, onClose);

    return (
        <S.Options style={{ transform: `translateY(40px)` }}>{ children }</S.Options>
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
                >
                    { children }
                </Options>
            ) }
        </S.MoreOptions>
    )
}

export default MoreOptions;
