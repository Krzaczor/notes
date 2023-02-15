import styled from 'styled-components';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePanelCategories, closePanelCategories } from 'context/panelCategoriesContext';
import SidePanel from 'components/shared/sidePanel/SidePanel';
import CategoriesList from './categoriesList/CategoriesList';
import Form from './form/Form';
import Title from './title/Title';

const Categories = styled.div`
    background-color: var(--color-background-middle);
    border-right: 1px solid var(--color-background-darkest);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 330px;
`;

function PanelCategories() {
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
            <Title />
            <Form />
            <CategoriesList />
        </Container>
    );
}

export default PanelCategories;
