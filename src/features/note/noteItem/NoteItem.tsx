import { useSettingsState } from 'context/settingsContext';
import Time from 'features/shared/time/Time';
import NoteContent from 'features/note/noteContent/NoteContent';
import s from './NoteItem.module.scss';
import { Props } from './NoteItem.types';

const NoteInfo = ({ note }: Props) => {
    const displayCreateAtNote = useSettingsState((s) => s.settings.displayCreateAtNote);

    if (!displayCreateAtNote) {
        return null;
    }

    return (
        <p className={s.noteInfo}>Utworzono: <Time time={note.createAt} /></p>
    )
}

const NoteItem = ({ note }: Props) => {
    return (
       <div className={s.root}>
            <NoteInfo note={note} />
           <NoteContent note={note} />
       </div>
    )
}

export default NoteItem;
