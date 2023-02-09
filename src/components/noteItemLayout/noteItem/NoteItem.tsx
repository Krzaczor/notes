import { useSettingsState } from 'context/settingsContext';
import Time from 'components/shared/time/Time';
import NoteContent from 'components/noteContent/NoteContent';
import * as S from './NoteItem.styles';
import { Props } from './NoteItem.types';

const NoteInfo = ({ note }: Props) => {
    const { settings } = useSettingsState();

    if (!settings.displayCreateAtNote) {
        return null;
    }

    return (
        <S.NoteInfo>Utworzono: <Time time={note.createAt} /></S.NoteInfo>
    )
}

const NoteItem = ({ note }: Props) => {
    return (
       <S.NoteItem>
            <NoteInfo note={note} />
           <NoteContent note={note} />
       </S.NoteItem>
    )
}

export default NoteItem;
