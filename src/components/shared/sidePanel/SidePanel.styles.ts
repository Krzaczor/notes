import styled from 'styled-components';
import { animated } from 'react-spring';

export const SidePanel = styled(animated.div)`
    background-color: var(--color-background-middle);
    color: var(--color-text);
    height: 100%;
    padding: var(--padding-container);
    position: absolute;
    width: 330px;
    z-index: 10;
`;

export const Overlay = styled(animated.div)`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 5;
`;