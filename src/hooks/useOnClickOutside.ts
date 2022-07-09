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
    
        document.addEventListener('mousedown', listener, false);
        document.addEventListener('touchstart', listener, false);
    
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };

    }, [handler, ref]);
}

export default useOnClickOutside;
