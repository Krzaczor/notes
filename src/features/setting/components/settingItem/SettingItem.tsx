import { useSettingsState, updateSetting } from '../../store/settings.store';
import Checkbox from 'features/shared/checkbox/Checkbox';
import s from './SettingItem.module.scss';

interface SettingItemProps {
    name: string;
}

const settingNames: Record<string, string> = {
    lightMode: 'Jasny motyw',
    displayCreateAtNote: 'Wyświetl czas utworzenia',
}

export const SettingItem = ({ name }: SettingItemProps) => {
    const setting = useSettingsState(state => state.settings.find(s => s.name === name));

    if (!setting) {
        return null;
    }

    const handleToggleSetting = () => {
        updateSetting(name);
    }

    return (
        <div className={s.root}>
            <p className={s.name}>{ settingNames[name] }</p>
            <Checkbox onChange={handleToggleSetting} checked={setting.value} />
        </div>
    )
}
