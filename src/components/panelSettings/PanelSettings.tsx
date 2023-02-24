import SidePanel from 'components/shared/sidePanel/SidePanel';
import SettingsList from './settingsList/SettingsList';
import Title from './title/Title';
import { Props } from './PanelSettings.types';
import { usePanelCategories, hidePanelSettings } from 'context/panelSettingsContext';

function PanelSettings({ children }: Props) {
    const show = usePanelCategories();

    return (
        <SidePanel
            show={show}
            onClose={hidePanelSettings}
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
