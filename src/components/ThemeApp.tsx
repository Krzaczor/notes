import { useLightMode } from 'hooks/useLightMode'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const ThemeApp = ({ children }: Props) => {
    useLightMode();

    return (
        <>{ children }</>
    );
}

export default ThemeApp;
