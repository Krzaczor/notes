import { useRef, useState } from 'react';
import Actions from 'components/shared/actions/Actions';
import Button from 'components/shared/button/Button';
import MoreOptions from 'components/moreOptions/MoreOptions';
import * as S from './NavNotes.styles';

const NavNotes = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null!);

    const handleToggleMoreOptions = () => {
        setShowMoreOptions(prev => !prev);
    }

    const handleCloseMoreOptions = () => {
        setShowMoreOptions(false);
    }

    return (
        <Actions>
            <MoreOptions
                show={showMoreOptions}
                onClose={handleCloseMoreOptions}
                element={<Button
                    ref={btnRef}
                    variant='second'
                    onClick={handleToggleMoreOptions}
                >b</Button>}
            >
                <Button>usuń</Button>
                <Button>ważne</Button>
                <Button>nieważne</Button>
                <Button>zrobione</Button>
                <Button>niezrobione</Button>
            </MoreOptions>
            <S.Link to='/all' replace>ogółem</S.Link>
            <S.Link to='/undone' replace>nie zrobione</S.Link>
            <S.Link to='/priority' replace>ważne</S.Link>
        </Actions>
    );
}

export default NavNotes;
