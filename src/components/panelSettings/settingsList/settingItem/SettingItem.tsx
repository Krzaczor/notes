import { useSettingsActions } from 'context/settingsContext';
import { useLightMode } from 'hooks/useLightMode';
import Checkbox from 'components/shared/checkbox/Checkbox';
import * as S from './SettingItem.styles';
import { Settings } from 'types';

interface Props {
    name: keyof Settings;
    checked: boolean;
}

const settingNames: {
    [key: string]: string;
} = {
    lightMode: 'Jasny motyw',
    defaultPriority: 'Domyślnie ważne',
    displayCreateAtNote: 'Wyświetl czas utworzenia',
}

export const LightModeItem = ({ name, checked }: Props) => {
    useLightMode();

    return (
        <SettingItem name={name} checked={checked} />
    )
}

export const SettingItem = ({ name, checked }: Props) => {
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
