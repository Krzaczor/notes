import { useEffect, useRef } from 'react';
import { useSettingsState } from 'context/settingsContext'

export const useLightMode = () => {
    const firstRender = useRef(true);
    const { settings } = useSettingsState();

    document.querySelector('html')?.classList.toggle('light-mode', settings.lightMode);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        document.querySelector('html')?.classList.toggle('light-mode', settings.lightMode);
    }, [settings.lightMode]);
}
