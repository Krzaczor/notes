import Link from 'features/shared/link/Link';
import s from './NoteNotFound.module.scss';
import { basePath } from 'config/router';

const NoteNotFound = () => {
    return (
        <div className={s.root}>
            <p>Niestety nie znaleźliśmy Twojej notatki :(</p>
            <Link to={basePath} variant='dark' size='lg'>wróć</Link>
        </div>
    )
}

export default NoteNotFound;
