import NoteItem from './noteItem/NoteItem';
import * as S from './NotesList.styles';
import { Props } from './NotesList.types';

const NotesList = ({ notes }: Props) => {
    return (
        <S.NotesList>
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
        </S.NotesList>
    )
}

export default NotesList;
