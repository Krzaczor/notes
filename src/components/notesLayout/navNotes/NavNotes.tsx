import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import * as S from './NavNotes.styles';

const NavNotes = () => {
    return (
        <Actions>
            <Button variant='second'>b</Button>
            <S.Link to='/all' replace>ogółem</S.Link>
            <S.Link to='/undone' replace>nie zrobione</S.Link>
            <S.Link to='/priority' replace>ważne</S.Link>
        </Actions>
    );
}

export default NavNotes;
