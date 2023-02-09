import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import PanelCategories from 'components/panelCategories/PanelCategories';
import Settings from 'components/errorStorage/settings/Settings';

const Layout = () => {
    const [canShowPanelCategories, setCanShowPanelCategories] = useState(false);

    const showPanelCategories = () => {
        setCanShowPanelCategories(true);
    }

    const hidePanelCategories = () => {
        setCanShowPanelCategories(false);
    }

    return (
        <>
            {null && <Settings />} 
            <div style={{ display: 'flex', height: '100%' }}>
                <PanelCategories
                    show={canShowPanelCategories}
                    onClose={hidePanelCategories}
                />
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <CommonPage showPanelCategories={showPanelCategories} />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;