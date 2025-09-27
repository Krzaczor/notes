import { useSettingsState } from 'features/setting/store/settings.store';
import Time from 'features/shared/time/Time';
import NoteContent from 'features/note/noteContent/NoteContent';
import s from './NoteItem.module.scss';
import { Props } from './NoteItem.types';

const NoteInfo = ({ note }: Props) => {
    const settings = useSettingsState((s) => s.settings);
    const displayCreateAtNote = settings.find(s => s.name === 'displayCreateAtNote')

    if (!displayCreateAtNote || !displayCreateAtNote.value) {
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
