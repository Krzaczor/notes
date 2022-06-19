import { useEffect, useState } from 'react';
import Button from 'components/shared/button/Button';
import Navigation from 'components/navigation/Navigation';
import CategoryName from 'components/categoryName/CategoryName';
import PanelCategories from 'components/panelCategories/PanelCategories';
import { useCategory } from 'hooks/useCategory';
import PanelSettings from 'components/panelSettings/PanelSettings';

const CommonPage = () => {
    const [canShowPanelCategories, setCanShowPanelCategories] = useState(false);
    const [canShowPanelSettings, setCanShowPanelSettings] = useState(false);
    const { categoryId, currentCategory } = useCategory();

    const showPanelCategories = () => {
        setCanShowPanelCategories(true);
    }

    const hidePanelCategories = () => {
        setCanShowPanelCategories(false);
    }

    const showPanelSettings = () => {
        setCanShowPanelSettings(true);
    }

    const hidePanelSettings = () => {
        setCanShowPanelSettings(false);
    }

    useEffect(hidePanelCategories, [categoryId]);

    return (
        <>
            <PanelCategories
                show={canShowPanelCategories}
                onClose={hidePanelCategories}
            >
                <PanelCategories.Title />
                <PanelCategories.Form />
                <PanelCategories.CategoriesList />
            </PanelCategories>
            <PanelSettings
                show={canShowPanelSettings}
                onClose={hidePanelSettings}
            >
                <PanelSettings.Title />
                <PanelSettings.SettingsList />
            </PanelSettings>
            <Navigation>
                <Button variant='second' onClick={showPanelCategories}>s</Button>
                <CategoryName category={currentCategory} />
                <Button variant='second' onClick={showPanelSettings}>s</Button>
            </Navigation>
        </>
    )
}

export default CommonPage;
