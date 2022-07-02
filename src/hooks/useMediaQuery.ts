import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
    const [isMatch, setIsMatch] = useState(false);
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

    useEffect(() => {
        const list = window.matchMedia(query);

        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [query]);

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
