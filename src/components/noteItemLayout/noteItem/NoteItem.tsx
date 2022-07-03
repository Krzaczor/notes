import Time from 'components/shared/time/Time';
import { Props } from './NoteItem.types';

const NoteItem = ({ note }: Props) => {
    return (
       <>
           <p>Utworzono: <Time time={note.createAt} /></p>
           <p>{ note.content }</p>
       </>
    )
}

export default NoteItem;
