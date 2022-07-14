import Link from 'components/shared/link/Link';
import * as S from './NoteNotFound.styles';

const NoteNotFound = () => {
    return (
        <S.NoteNotFound>
            <p>Niestety nie znaleźliśmy Twojej notatki :(</p>
            <Link to="/all" variant='dark' size='lg'>wróć</Link>
        </S.NoteNotFound>
    )
}

export default NoteNotFound;
