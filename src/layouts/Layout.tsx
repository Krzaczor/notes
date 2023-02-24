import { Outlet } from 'react-router-dom';
import { RiSettings5Fill } from 'react-icons/ri';
import { showPanelSettings } from 'context/panelSettingsContext';
import Button from 'components/shared/button/Button';
import PanelCategories from 'components/panelCategories/PanelCategories';
import Navigation from 'components/navigation/Navigation';
import CategoryName from 'components/categoryName/CategoryName';
import PanelSettings from 'components/panelSettings/PanelSettings';
import ButtonOpenCategories from 'components/ButtonOpenCategories';

const Layout = () => {
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <PanelCategories>
                <PanelCategories.Title />
                <PanelCategories.Form />
                <PanelCategories.CategoriesList />
            </PanelCategories>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <PanelSettings>
                    <PanelSettings.Title />
                    <PanelSettings.SettingsList />
                </PanelSettings>
                <Navigation>
                    <ButtonOpenCategories />
                    <CategoryName />
                    <Button variant='second' onClick={showPanelSettings}>
                        <RiSettings5Fill size={24} />
                    </Button>
                </Navigation>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;