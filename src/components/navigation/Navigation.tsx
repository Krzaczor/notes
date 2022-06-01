import Button from 'components/shared/button/Button';
import CategoryName from 'components/categoryName/CategoryName';
import * as S from './Navigation.styles';

function Navigation() {
    return (
        <S.Navigation>
            <Button variant='second'>s</Button>
            <CategoryName />
            <Button variant='second'>s</Button>
            <Button variant='second'>s</Button>
        </S.Navigation>
    )
}

export default Navigation;