import { useSettingsActions } from 'context/settingsContext';
import * as S from './SettingItem.styles';
import { Settings } from 'types';
import Checkbox from 'components/shared/checkbox/Checkbox';

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

const SettingItem = ({ name, checked }: Props) => {
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

export default SettingItem;
