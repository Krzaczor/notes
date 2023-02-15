import { useEffect, useRef } from 'react';
import { Transition, easings } from 'react-spring';
import useOnClickEsc from 'hooks/useOnClickEsc';
import useOnClickOutside from 'hooks/useOnClickOutside';
import * as S from './SidePanel.styles';
import { Props } from './SidePanel.types';

const sides = {
    left: {
        from: { x: '-100%' },
        enter: { x: '0' },
        leave: { x: '-100%' },
    },
    right: {
        from: { x: '100%' },
        enter: { x: '0' },
        leave: { x: '100%' },
    }
}

const positions = {
    left: {
        left: 0,
        top: 0,
        borderRight: '1px solid var(--color-background-darkest)'
    },
    right: {
        right: 0,
        top: 0,
        borderLeft: '1px solid var(--color-background-darkest)'
    }
}

const config = {
    duration: 150,
    easing: easings.linear,
}

const SidePanel = ({ show, onClose, showOverlay = false, animateFrom, children }: Props) => {
    const sidePanelRef = useRef<HTMLDivElement>(null!);

    useOnClickOutside(sidePanelRef, onClose);
    useOnClickEsc(() => show && onClose());

    useEffect(() => {
        return onClose;
    }, []);

    return (
        <>
            <Transition
                items={show && showOverlay}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={config}
            >
                {(styles, item) => (
                    item && <S.Overlay style={styles} />
                )}
            </Transition>
            <Transition
                items={show}
                config={config}
                {...sides[animateFrom]}
            >
                {(styles, item) => (
                    item && (
                        <S.SidePanel
                            ref={sidePanelRef}
                            style={{
                                ...positions[animateFrom],
                                ...styles
                            }}
                        >
                            { children }
                        </S.SidePanel>
                    )
                )}
            </Transition>
            
        </>
    );
}

export default SidePanel;
