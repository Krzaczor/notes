import { useSettingsState } from 'context/settingsContext';
import SettingItem from './settingItem/SettingItem';
import * as S from './SettingsList.styles';
import { UpdateSettings } from 'types';

const SettingsList = () => {
    const { settings, error } = useSettingsState();

    if (error) {
        return null;
    }

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
