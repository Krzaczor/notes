import { Outlet } from 'react-router-dom';
import { RiSettings5Fill } from 'react-icons/ri';
import { showPanelSettings } from 'context/panelSettingsContext';
import Button from 'features/shared/button/Button';
import PanelCategories from 'features/category/panelCategories/PanelCategories';
import CategoryName from 'features/category/categoryName/CategoryName';
import ButtonOpenCategories from 'features/category/ButtonOpenCategories';
import PanelSettings from 'features/setting/panelSettings/PanelSettings';
import s from './Layout.module.scss';

const Layout = () => {
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <PanelCategories>
                <PanelCategories.Form />
                <PanelCategories.CategoriesList />
            </PanelCategories>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <PanelSettings>
                    <PanelSettings.SettingsList />
                </PanelSettings>
                <nav className={s.navigation}>
                    <ButtonOpenCategories />
                    <CategoryName />
                    <Button variant='second' onClick={showPanelSettings}>
                        <RiSettings5Fill size={24} />
                    </Button>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;