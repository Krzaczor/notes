import { useSettingsState } from 'context/settingsContext';
import SettingItem from './settingItem/SettingItem';
import * as S from './SettingsList.styles';
import { UpdateSettings } from 'types';

const SettingsList = () => {
    const { settings } = useSettingsState();

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
