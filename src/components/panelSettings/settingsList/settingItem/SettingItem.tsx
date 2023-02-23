import { useSettingsActions, useSettingsState } from 'context/settingsContext';
import { useLightMode } from 'hooks/useLightMode';
import Checkbox from 'components/shared/checkbox/Checkbox';
import * as S from './SettingItem.styles';
import { Settings } from 'types';

interface Props {
    name: keyof Settings;
}

const settingNames = {
    lightMode: 'Jasny motyw',
    defaultPriority: 'Domyślnie ważne',
    displayCreateAtNote: 'Wyświetl czas utworzenia',
}

export const LightModeItem = ({ name }: Props) => {
    useLightMode();

    return (
        <SettingItem name={name} />
    )
}

export const SettingItem = ({ name }: Props) => {
    const checked = useSettingsState(s => s.settings[name]);
    const { updateSetting } = useSettingsActions();

    const handleToggleSetting = () => {
        updateSetting(name);
    }

    return (
        <S.SettingItem>
            <p>{ settingNames[name] }</p>
            <Checkbox onChange={handleToggleSetting} checked={checked} />
        </S.SettingItem>
    )
}
