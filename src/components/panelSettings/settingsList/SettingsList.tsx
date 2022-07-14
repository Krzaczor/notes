import { useSettingsState } from 'context/settingsContext';
import { useLightMode } from 'hooks/useLightMode';
import SettingItem from './settingItem/SettingItem';
import * as S from './SettingsList.styles';
import { UpdateSettings } from 'types';

const SettingsList = () => {
    const { settings } = useSettingsState();
    useLightMode();

    const settingsList = Object.entries(settings) as [UpdateSettings, boolean][];

    return (
        <S.SettingsList>
            {settingsList.map(([ name, checked ]) => (
                <SettingItem key={name} name={name} checked={checked} />
            ))}
        </S.SettingsList>
    )
}

export default SettingsList;
