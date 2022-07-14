import Time from 'components/shared/time/Time';
import NoteContent from 'components/noteContent/NoteContent';
import * as S from './NoteItem.styles';
import { Props } from './NoteItem.types';
import { useSettingsState } from 'context/settingsContext';

const NoteItem = ({ note }: Props) => {
    const { settings } = useSettingsState();

    return (
       <>
            {settings?.displayCreateAtNote && (
                <S.NoteInfo>Utworzono: <Time time={note.createAt} /></S.NoteInfo>
            )}
           <NoteContent note={note} />
       </>
    )
}

export default NoteItem;
