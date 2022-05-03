import { FC } from 'react';
import * as S from './NoteItem.styles';
import { Note } from './NoteItem.types';

const NoteItem: FC<Note> = () => {
    return (
        <S.NoteItem>
            <input type='checkbox' />
            <input type='checkbox' />
            <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>zadanie do zrobienia fjijid fiosf jsf sfjd iosaiosaiosa a s</p>
        </S.NoteItem>
    )
}

export default NoteItem;
