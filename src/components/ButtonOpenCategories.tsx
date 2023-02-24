import { BsListUl } from 'react-icons/bs';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { openPanelCategories } from 'context/panelCategoriesContext';
import Button from 'components/shared/button/Button';
import { MEDIA_POINT } from 'consts';

const ButtonOpenCategories = () => {
    const isLargeViewport = useMediaQuery(`(max-width: ${MEDIA_POINT}px)`);

    if (!isLargeViewport) {
        return null;
    }

    return (
        <Button variant='second' onClick={openPanelCategories}>
            <BsListUl size={24} />
        </Button>
    )
}

export default ButtonOpenCategories;
