import { useSettingsState } from 'context/settingsContext';
import { SettingItem, LightModeItem } from './settingItem/SettingItem';
import * as S from './SettingsList.styles';
import { Settings } from 'types';

const settingsMap: (keyof Settings)[] = ['lightMode', 'defaultPriority', 'displayCreateAtNote'];

const SettingsList = () => {
    const { settings } = useSettingsState();

    const settingsList: [keyof Settings, boolean][] = settingsMap.map(setting => ([
        setting,
        settings[setting]
    ]));

    return (
        <S.SettingsList>
            {settingsList.map(([ name, checked ]) => {
                if (name === 'lightMode') {
                    return <LightModeItem key={name} name={name} checked={checked} />
                }

                return <SettingItem key={name} name={name} checked={checked} />
            })}
        </S.SettingsList>
    )
}

export default SettingsList;
