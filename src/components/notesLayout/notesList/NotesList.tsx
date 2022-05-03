import NoteItem from './noteItem/NoteItem';
import * as S from './NotesList.styles';

const notes = Array.from({ length: 15 }, (_, index) => ({
    id: (index + 1).toString(),
    content: 'zdanie do zrobienia',
    createAt: Date.now(),
    done: null,
    priority: false,
}));

const NotesList = () => {
    return (
        <S.NotesList>
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
        </S.NotesList>
    )
}

export default NotesList;
