import { useEffect } from 'react';

const useOnClickEsc = (handler: () => void) => {
    useEffect(() => {
        const listener = (evt: KeyboardEvent) => {
            if (evt.key === 'Escape') {
                handler();
            }
        }

        document.addEventListener('keydown', listener);

        return () => {
            document.removeEventListener('keydown', listener);
        }
    }, [handler]);
}

export default useOnClickEsc;
