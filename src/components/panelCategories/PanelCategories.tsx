import styled from 'styled-components';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useCategory } from 'hooks/useCategory';
import SidePanel from 'components/shared/sidePanel/SidePanel';
import CategoriesList from './categoriesList/CategoriesList';
import Form from './form/Form';
import Title from './title/Title';
import { Props } from './PanelCategories.types';
import { useEffect } from 'react';

const Categories = styled.div`
    background-color: var(--color-background-middle);
    border-right: 1px solid var(--color-background-darkest);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 330px;
`;

function PanelCategories({ show, onClose }: Props) {
    const { categoryId } = useCategory();
    const isSmallViewport = useMediaQuery('(max-width: 700px)');

    const Container = isSmallViewport ? SidePanel : Categories;

    useEffect(onClose, [categoryId, isSmallViewport]);

    return (
        <Container
            show={show}
            onClose={onClose}
            animateFrom='left'
            showOverlay
        >
            <Title />
            <Form />
            <CategoriesList categoryId={categoryId} />
        </Container>
    );
}

PanelCategories.Title = Title;
PanelCategories.Form = Form;
PanelCategories.CategoriesList = CategoriesList;

export default PanelCategories;
