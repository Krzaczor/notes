import { useRef } from 'react';
import { useFocus } from 'hooks/useFocus';
import useOnClickOutside from 'hooks/useOnClickOutside';
import s from './MoreOptions.module.scss';
import { OptionsProps, Props } from './MoreOptions.types';

const Options = ({ show, onClose, listRef, children }: OptionsProps) => {
    const focus = useFocus(show, onClose);

    useOnClickOutside(listRef, onClose);

    return (
        <div
            className={s.optionsMore} 
            style={{ transform: `translateY(40px)` }} {...focus}
        >{ children }</div>
    )
}

const MoreOptions = ({ show, onClose, element, children }: Props) => {
    const listRef = useRef<HTMLDivElement>(null!);

    return (
        <div className={s.root} ref={listRef}>
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
        </div>
    )
}

export default MoreOptions;
