import SidePanel from 'features/shared/sidePanel/SidePanel';
import SettingsList from '../settingsList/SettingsList';
import { Props } from './PanelSettings.types';
import { usePanelCategories, hidePanelSettings } from 'context/panelSettingsContext';

function PanelSettings({ children }: Props) {
    const show = usePanelCategories();

    return (
        <SidePanel
            title='ustawienia'
            show={show}
            onClose={hidePanelSettings}
            animateFrom='right'
            showOverlay
        >
            { children }
        </SidePanel>
    );
}

PanelSettings.SettingsList = SettingsList;

export default PanelSettings;
