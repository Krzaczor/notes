import { Outlet } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import PanelCategories from 'components/panelCategories/PanelCategories';
import Settings from 'components/errorStorage/settings/Settings';

const Layout = () => {
    return (
        <>
            {null && <Settings />} 
            <div style={{ display: 'flex', height: '100%' }}>
                <PanelCategories>
                    <PanelCategories.Title />
                    <PanelCategories.Form />
                    <PanelCategories.CategoriesList />
                </PanelCategories>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <CommonPage />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;