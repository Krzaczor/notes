import { ReactNode } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePanelCategories, closePanelCategories } from 'context/panelCategoriesContext';
import SidePanel from 'components/shared/sidePanel/SidePanel';
import CategoriesList from './categoriesList/CategoriesList';
import Form from './form/Form';
import Title from './title/Title';
import s from './PanelCategories.module.scss';
import { Props as SidePanelProps } from 'components/shared/sidePanel/SidePanel.types';

const Categories = ({ children }: SidePanelProps) => {
    return (
        <div className={s.container}>{ children }</div>
    )
}

interface Props {
    children: ReactNode;
}

function PanelCategories({ children }: Props) {
    const isSmallViewport = useMediaQuery('(max-width: 700px)');
    const show = usePanelCategories();

    const Container = isSmallViewport ? SidePanel : Categories;

    return (
        <Container
            show={show}
            onClose={closePanelCategories}
            animateFrom='left'
            showOverlay
        >
            { children }
        </Container>
    );
}

PanelCategories.Title = Title;
PanelCategories.Form = Form;
PanelCategories.CategoriesList = CategoriesList;

export default PanelCategories;
