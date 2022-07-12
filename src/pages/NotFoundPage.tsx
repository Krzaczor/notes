import Link from 'components/shared/link/Link';
import NotFound from 'components/notFound/NotFound';
import Message from 'components/notFound/message/Message';

const NotFoundPage = () => {
    return (
        <NotFound>
            <Message>Uups! Niestety strona nie istnieje.</Message>
            <Link to='/all' variant='dark'>wróć do strony głównej</Link>
        </NotFound>
    )
}

export default NotFoundPage;
