import NoteListItem from '../noteListItem/NoteListItem';
import s from './NotesList.module.scss';
import { Props } from './NotesList.types';

const NotesList = ({ notes }: Props) => {
    return (
        <ul className={s.root}>
            {notes.map((note) => (
                <NoteListItem
                    key={note.id}
                    categoryId={note.category}
                    {...note}
                />
            ))}
        </ul>
    )
}

export default NotesList;
