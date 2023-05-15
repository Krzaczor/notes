import { useSettingsState } from 'context/settingsContext';

export const useLightMode = () => {
    const lightMode = useSettingsState((s) => s.settings.lightMode);
    document.querySelector('html')?.classList.toggle('light-mode', lightMode);
}
