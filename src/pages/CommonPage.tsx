import { useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { openPanelCategories } from 'context/panelCategoriesContext';
import Button from 'components/shared/button/Button';
import Navigation from 'components/navigation/Navigation';
import CategoryName from 'components/categoryName/CategoryName';
import PanelSettings from 'components/panelSettings/PanelSettings';
import { MEDIA_POINT } from 'consts';

const CommonPage = () => {
    const [canShowPanelSettings, setCanShowPanelSettings] = useState(false);
    const isLargeViewport = useMediaQuery(`(max-width: ${MEDIA_POINT}px)`);

    const showPanelSettings = () => {
        setCanShowPanelSettings(true);
    }

    const hidePanelSettings = () => {
        setCanShowPanelSettings(false);
    }

    return (
        <>
            <PanelSettings
                show={canShowPanelSettings}
                onClose={hidePanelSettings}
            >
                <PanelSettings.Title />
                <PanelSettings.SettingsList />
            </PanelSettings>
            <Navigation>
                {isLargeViewport && (
                    <Button variant='second' onClick={openPanelCategories}>
                        <BsListUl size={24} />
                    </Button>
                )}
                <CategoryName />
                <Button variant='second' onClick={showPanelSettings}>
                    <RiSettings5Fill size={24} />
                </Button>
            </Navigation>
        </>
    )
}

export default CommonPage;
