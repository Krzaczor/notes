import SidePanel from 'components/shared/sidePanel/SidePanel';
import SettingsList from './settingsList/SettingsList';
import Title from './title/Title';
import { Props } from './PanelSettings.types';

function PanelSettings({ children, show, onClose }: Props) {
    return (
        <SidePanel
            show={show}
            onClose={onClose}
            animateFrom='right'
            showOverlay
        >
            { children }
        </SidePanel>
    );
}

PanelSettings.Title = Title;
PanelSettings.SettingsList = SettingsList;

export default PanelSettings;
