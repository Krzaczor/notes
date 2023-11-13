import { ReactNode } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePanelCategories, closePanelCategories } from 'context/panelCategoriesContext';
import SidePanel from 'features/shared/sidePanel/SidePanel';
import CategoriesList from 'features/category/categoriesList/CategoriesList';
import Form from 'features/category/categoryForm/CategoryForm';
import s from './PanelCategories.module.scss';
import { Props as SidePanelProps } from 'features/shared/sidePanel/SidePanel.types';

const Categories = ({ title, children }: SidePanelProps) => {
    return (
        <div className={s.container}>
            <p className={s.title}>{ title }</p>
            { children }
        </div>
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
            title='kategorie'
            show={show}
            onClose={closePanelCategories}
            animateFrom='left'
            showOverlay
        >
            { children }
        </Container>
    );
}

PanelCategories.Form = Form;
PanelCategories.CategoriesList = CategoriesList;

export default PanelCategories;
