import { useCategory } from 'hooks/useCategory';
import NoteItem from './noteItem/NoteItem';
import * as S from './NotesList.styles';
import { Props } from './NotesList.types';

const NotesList = ({ notes }: Props) => {
    const { categoryId } = useCategory();

    return (
        <S.NotesList>
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    categoryId={categoryId}
                    {...note}
                />
            ))}
        </S.NotesList>
    )
}

export default NotesList;
