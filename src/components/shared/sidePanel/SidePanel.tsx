import { useEffect, cloneElement, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { animated, Transition, easings } from 'react-spring';
import { useFocus } from 'hooks/useFocus';
import s from './SidePanel.module.scss';
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

interface TransitionProps {
    canShow: boolean;
    children: ReactElement;
}

interface TransitionWithFrom extends TransitionProps {
    animateFrom: keyof typeof sides;
}

const TransitionOverlay = ({ canShow, children }: TransitionProps) => {
    return (
        <Transition
            items={canShow}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={config}
        >
            {(styles, item) => (
                item && cloneElement(children, { style: styles })
            )}
        </Transition>
    )
}

const TransitionContent = ({ canShow, animateFrom, children }: TransitionWithFrom) => {
    return (
        <Transition
            items={canShow}
            config={config}
            {...sides[animateFrom]}
        >
            {(styles, item) => (
                item && cloneElement(children, {
                    style: {
                        ...positions[animateFrom],
                        ...styles
                    }
                })
            )}
        </Transition>
    )
}

const SidePanelPortal = ({ show, onClose, showOverlay = false, animateFrom, children }: Props) => {
    const focus = useFocus(show, onClose);

    useEffect(() => {
        return onClose;
    }, []);

    return (
        <>
            <TransitionOverlay canShow={show && showOverlay}>
                <animated.div className={s.overlay} onClick={onClose} />
            </TransitionOverlay>
            <TransitionContent canShow={show} animateFrom={animateFrom}>
                <animated.div className={s.root} {...focus}>{ children }</animated.div>
            </TransitionContent>
        </>
    );
}

const SidePanel = (props: Props) => {
    let sidePanel = document.querySelector('.side-panel');

    if (sidePanel === null) {
        sidePanel = document.createElement('div');
        sidePanel.classList.add('side-panel');
        document.body.appendChild(sidePanel);
    }

    return createPortal(
        <SidePanelPortal {...props} />,
        sidePanel
    )
}

export default SidePanel;
