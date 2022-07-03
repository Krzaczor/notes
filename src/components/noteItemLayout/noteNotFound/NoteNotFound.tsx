import Link from 'components/shared/link/Link';

const NoteNotFound = () => {
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '15px'}}>
            <p>Niestety nie znaleźliśmy Twojej notatki :(</p>
            <Link to="/all">wróć</Link>
        </div>
    )
}

export default NoteNotFound;
