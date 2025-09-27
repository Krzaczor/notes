import { useSettingsState } from '../../store/settings.store';
import { SettingItem } from '../settingItem/SettingItem';
import s from './SettingsList.module.scss';

const SettingsList = () => {
    const settings = useSettingsState(state => state.settings);

    return (
        <div className={s.root}>
            {settings.map((item) => {
                return <SettingItem key={item.name} name={item.name} />
            })}
        </div>
    )
}

export default SettingsList;
