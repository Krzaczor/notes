import { useSettingsActions, useSettingsState } from 'context/settingsContext';
import { useLightMode } from 'hooks/useLightMode';
import Checkbox from 'components/shared/checkbox/Checkbox';
import s from './SettingItem.module.scss';
import { Settings } from 'types';

interface Props {
    name: keyof Settings;
}

const settingNames = {
    lightMode: 'Jasny motyw',
    defaultPriority: 'Domyślnie ważne',
    displayCreateAtNote: 'Wyświetl czas utworzenia',
}

export const SettingItem = ({ name }: Props) => {
    const checked = useSettingsState(s => s.settings[name]);
    const { updateSetting } = useSettingsActions();

    const handleToggleSetting = () => {
        updateSetting(name);
    }

    return (
        <div className={s.root}>
            <p>{ settingNames[name] }</p>
            <Checkbox onChange={handleToggleSetting} checked={checked} />
        </div>
    )
}
