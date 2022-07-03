import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);
    const [isMatch, setIsMatch] = useState(() => {
        const list = window.matchMedia(query);
        setMediaQueryList(list);
        return list.matches;
    });

    useEffect(() => {
        if (!mediaQueryList) return;

        const handleChange = (event: MediaQueryListEvent) => {
            setIsMatch(event.matches);
        }

        if (mediaQueryList?.addEventListener) {
            mediaQueryList.addEventListener('change', handleChange);
        } else {
            mediaQueryList?.addListener(handleChange);
        }
    }, [mediaQueryList]);

    return isMatch;
}
