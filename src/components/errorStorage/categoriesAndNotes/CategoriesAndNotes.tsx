import { useCategoriesActions } from 'context/categoriesContext';
import { useNotesActions } from 'context/notesContext';
import { Button } from 'components/shared/button/Button.styles';
import * as S from './CategoriesAndNotes.styles';

const CategoriesAndNotes = () => {
    const { removeAllNotes, resetError: resetNotesError } = useNotesActions();
    const { removeAllCategories, resetError: resetCategoriesError } = useCategoriesActions();

    const handleReset = () => {
        removeAllNotes();
        removeAllCategories();
        resetNotesError();
        resetCategoriesError();
    }

    return (
        <S.CategoriesAndNotes>
            <S.MessageContainer>
                <S.Message>Kategorie i notatki nie są możliwe do pokazania.</S.Message>
                <S.Message>Żeby dalej korzystać z aplikacji musisz je zresetować.</S.Message>
                <S.Message>Niestety utracisz wszystkie kategorie i notatki.</S.Message>
            </S.MessageContainer>
            <Button variant='dark' size='lg' onClick={handleReset}>zresetuj</Button>
        </S.CategoriesAndNotes>
    )
}

export default CategoriesAndNotes;
