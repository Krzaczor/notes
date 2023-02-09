import { useEffect, useRef } from 'react';
import { useSettingsState } from 'context/settingsContext'

export const useLightMode = () => {
    const firstRender = useRef(true);
    const lightMode = useSettingsState((s) => s.settings.lightMode);

    document.querySelector('html')?.classList.toggle('light-mode', lightMode ?? false);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        document.querySelector('html')?.classList.toggle('light-mode', lightMode ?? false);
    }, [lightMode]);
}
