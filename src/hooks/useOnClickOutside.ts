import { RefObject, useEffect } from 'react';

const useOnClickOutside = <T>(
    ref: RefObject<T & HTMLElement>,
    handler: () => void
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler();
        };
    
        document.addEventListener('mouseup', listener);
        document.addEventListener('touchend', listener);
    
        return () => {
            document.removeEventListener('mouseup', listener);
            document.removeEventListener('touchend', listener);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useOnClickOutside;
