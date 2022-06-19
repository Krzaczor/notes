import { useSettingsActions } from 'context/settingsContext';
import * as S from './SettingItem.styles';
import { UpdateSettings } from 'types';
import Checkbox from 'components/shared/checkbox/Checkbox';

interface Props {
    name: UpdateSettings;
    checked: boolean;
}

const settingNames = {
    lightMode: 'Jasny motyw',
    defaultPriority: 'Domyślnie ważne',
    displayCreateAtNote: 'Wyświetl czas utworzenia',
}

const SettingItem = ({ name, checked }: Props) => {
    const { updateSetting } = useSettingsActions();

    const handleToggleSetting = () => {
        if (name === 'lightMode') {
            document.querySelector('html')?.classList.toggle('light-mode');
        }

        updateSetting(name);
    }

    return (
        <S.SettingItem key={name}>
            <p>{ settingNames[name] }</p>
            <Checkbox onChange={handleToggleSetting} checked={checked} />
        </S.SettingItem>
    )
}

export default SettingItem;
