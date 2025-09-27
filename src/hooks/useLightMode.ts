import { useSettingsState } from 'features/setting/store/settings.store';

export const useLightMode = () => {
    const settings = useSettingsState(state => state.settings);
    const lightMode = settings.find(s => s.name === 'lightMode');

    if (!lightMode) {
        return;
    }

    document.querySelector('html')?.classList.toggle('light-mode', lightMode.value);
}
