import SidePanel from 'components/shared/sidePanel/SidePanel';
import SettingsList from './settingsList/SettingsList';
import Title from './title/Title';
import { Props } from './PanelSettings.types';
import { useLightMode } from 'hooks/useLightMode';

function PanelSettings({ children, show, onClose }: Props) {
    useLightMode();

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
