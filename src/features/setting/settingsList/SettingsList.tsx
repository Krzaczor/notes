import { useSettingsState } from 'context/settingsContext';
import { SettingItem } from '../settingItem/SettingItem';
import s from './SettingsList.module.scss';

const SettingsList = () => {
    const namesSettings = useSettingsState(s => s.namesSetings);

    return (
        <div className={s.root}>
            {namesSettings.map((name) => {
                return <SettingItem key={name} name={name} />
            })}
        </div>
    )
}

export default SettingsList;
