import { useSettingsState } from 'context/settingsContext';
import Time from 'components/shared/time/Time';
import NoteContent from 'components/noteContent/NoteContent';
import * as S from './NoteItem.styles';
import { Props } from './NoteItem.types';

const NoteItem = ({ note }: Props) => {
    const { settings } = useSettingsState();

    return (
       <S.NoteItem>
            {settings?.displayCreateAtNote && (
                <S.NoteInfo>Utworzono: <Time time={note.createAt} /></S.NoteInfo>
            )}
           <NoteContent note={note} />
       </S.NoteItem>
    )
}

export default NoteItem;
