import { Outlet } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import PanelCategories from 'components/panelCategories/PanelCategories';

const Layout = () => {
    return (
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
    )
}

export default Layout;