import { useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
import { useCategory } from 'hooks/useCategory';
import { useMediaQuery } from 'hooks/useMediaQuery';
import Button from 'components/shared/button/Button';
import Navigation from 'components/navigation/Navigation';
import CategoryName from 'components/categoryName/CategoryName';
import PanelSettings from 'components/panelSettings/PanelSettings';
import { mediaPoint } from 'consts';

interface Props {
    showPanelCategories: () => void;
}

const CommonPage = ({ showPanelCategories }: Props) => {
    const [canShowPanelSettings, setCanShowPanelSettings] = useState(false);
    const { currentCategory } = useCategory();
    const isLargeViewport = useMediaQuery(`(max-width: ${mediaPoint}px)`);

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
                    <Button variant='second' onClick={showPanelCategories}>
                        <BsListUl size={24} />
                    </Button>
                )}
                <CategoryName category={currentCategory} />
                <Button variant='second' onClick={showPanelSettings}>
                    <RiSettings5Fill size={24} />
                </Button>
            </Navigation>
        </>
    )
}

export default CommonPage;
