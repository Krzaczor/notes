import { useSettingsActions } from 'context/settingsContext';
import * as S from './SettingItem.styles';
import { UpdateSettings } from 'types';

interface Props {
    name: UpdateSettings;
}

const settingNames = {
    lightMode: 'Jasny motyw',
    defaultPriority: 'Domyślnie ważne',
    displayCreateAtNote: 'Wyświetl czas utworzenia',
}

const SettingItem = ({ name }: Props) => {
    const { updateSetting } = useSettingsActions();

    const handleToggleSetting = (name: UpdateSettings) => {
        if (name === 'lightMode') {
            document.querySelector('html')?.classList.toggle('light-mode');
        }

        updateSetting(name);
    }

    return (
        <S.SettingItem key={name}>
            <p>{ settingNames[name] }</p>
            <button onClick={() => handleToggleSetting(name)}>u</button>
        </S.SettingItem>
    )
}

export default SettingItem;
