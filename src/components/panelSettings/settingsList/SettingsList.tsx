import { useSettingsState } from 'context/settingsContext';
import SettingItem from './settingItem/SettingItem';
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
            {settingsList.map(([ name, checked ]) => (
                <SettingItem key={name} name={name} checked={checked} />
            ))}
        </S.SettingsList>
    )
}

export default SettingsList;
