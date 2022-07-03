import Time from 'components/shared/time/Time';
import NoteContent from 'components/noteContent/NoteContent';
import { Props } from './NoteItem.types';

const NoteItem = ({ note }: Props) => {
    return (
       <>
           <p style={{ marginBottom: '10px' }}>Utworzono: <Time time={note.createAt} /></p>
           <NoteContent note={note} />
       </>
    )
}

export default NoteItem;
