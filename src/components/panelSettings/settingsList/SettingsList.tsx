import { useSettingsState } from 'context/settingsContext';
import { SettingItem, LightModeItem } from './settingItem/SettingItem';
import * as S from './SettingsList.styles';

const SettingsList = () => {
    const namesSettings = useSettingsState(s => s.namesSetings);

    return (
        <S.SettingsList>
            {namesSettings.map((name) => {
                if (name === 'lightMode') {
                    return <LightModeItem key={name} name={name} />
                }

                return <SettingItem key={name} name={name} />
            })}
        </S.SettingsList>
    )
}

export default SettingsList;
