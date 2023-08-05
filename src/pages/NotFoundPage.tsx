import Link from 'features/shared/link/Link';
import Main from 'features/shared/main/Main';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <Main className={s.root}>
            <p>Uups! Niestety strona nie istnieje.</p>
            <Link to='/all' variant='dark'>wróć do strony głównej</Link>
        </Main>
    )
}

export default NotFoundPage;
