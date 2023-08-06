import { useCategory } from 'hooks/useCategory';
import NoteListItem from '../noteListItem/NoteListItem';
import s from './NotesList.module.scss';
import { Props } from './NotesList.types';

const NotesList = ({ notes }: Props) => {
    const { categoryId } = useCategory();

    return (
        <ul className={s.root}>
            {notes.map((note) => (
                <NoteListItem
                    key={note.id}
                    categoryId={categoryId}
                    {...note}
                />
            ))}
        </ul>
    )
}

export default NotesList;
