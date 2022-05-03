import Button from '../../shared/button/Button';
import * as S from './NavNotes.styles';

const NavNotes = () => {
    return (
        <S.NavNotes>
            <Button variant='second'>b</Button>
            <Button as='a' href='#'>ogółem</Button>
            <Button as='a' href='#' variant='dark'>nie zrobione</Button>
            <Button as='a' href='#'>ważne</Button>
        </S.NavNotes>
    );
}

export default NavNotes;
