import { useCategory } from 'hooks/useCategory';
import NoteItem from '../noteListItem/NoteItem';
import s from './NotesList.module.scss';
import { Props } from './NotesList.types';

const NotesList = ({ notes }: Props) => {
    const { categoryId } = useCategory();

    return (
        <ul className={s.root}>
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    categoryId={categoryId}
                    {...note}
                />
            ))}
        </ul>
    )
}

export default NotesList;
