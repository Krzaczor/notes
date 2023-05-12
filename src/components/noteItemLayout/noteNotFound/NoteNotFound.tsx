import Link from 'components/shared/link/Link';
import s from './NoteNotFound.module.scss';

const NoteNotFound = () => {
    return (
        <div className={s.root}>
            <p>Niestety nie znaleźliśmy Twojej notatki :(</p>
            <Link to="/all" variant='dark' size='lg'>wróć</Link>
        </div>
    )
}

export default NoteNotFound;
