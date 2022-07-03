import Time from 'components/shared/time/Time';
import NoteContent from 'components/noteContent/NoteContent';
import * as S from './NoteItem.styles';
import { Props } from './NoteItem.types';

const NoteItem = ({ note }: Props) => {
    return (
       <>
           <S.NoteCreateAt>Utworzono: <Time time={note.createAt} /></S.NoteCreateAt>
           <NoteContent note={note} />
       </>
    )
}

export default NoteItem;
