import SidePanel from 'components/shared/sidePanel/SidePanel';
import CategoriesList from './categoriesList/CategoriesList';
import Form from './form/Form';
import Title from './title/Title';
import { Props } from './PanelCategories.types';

function PanelCategories({ children, show, onClose }: Props) {
    return (
        <SidePanel
            show={show}
            onClose={onClose}
            animateFrom='left'
            showOverlay
        >
            { children }
        </SidePanel>
    );
}

PanelCategories.Title = Title;
PanelCategories.Form = Form;
PanelCategories.CategoriesList = CategoriesList;

export default PanelCategories;
