import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import PanelCategories from 'components/panelCategories/PanelCategories';
import { useNotesState } from 'context/notesContext';
import { useCategoriesState } from 'context/categoriesContext';
import CategoriesAndNotes from 'components/errorStorage/categoriesAndNotes/CategoriesAndNotes';
import { useSettingsState } from 'context/settingsContext';
import Settings from 'components/errorStorage/settings/Settings';

const Layout = () => {
    const [canShowPanelCategories, setCanShowPanelCategories] = useState(false);
    const { notes } = useNotesState();
    const { categories, error: errorCategories } = useCategoriesState();
    const { settings, error: errorSettings } = useSettingsState();

    const showPanelCategories = () => {
        setCanShowPanelCategories(true);
    }

    const hidePanelCategories = () => {
        setCanShowPanelCategories(false);
    }

    if (errorCategories !== null) {
        return <CategoriesAndNotes />;
    }

    if (notes === null || categories === null) {
        return null;
    }

    return (
        <>
            {errorSettings !== null && <Settings />}
            <div style={{ display: 'flex', height: '100%' }}>
                {settings && (
                    <PanelCategories
                        show={canShowPanelCategories}
                        onClose={hidePanelCategories}
                    />
                )}
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <CommonPage showPanelCategories={showPanelCategories} />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;