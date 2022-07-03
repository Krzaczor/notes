import { useState } from 'react';
import NoteContentEdit from './noteContentEdit/NoteContentEdit';
import * as S from './NoteContent.styles';
import { Props } from './NoteContent.types';

const NoteContent = ({ note }: Props) => {
    const [editMode, setEditMode] = useState(false);

    const handleStartEdit = () => {
        setEditMode(true);
    }

    const handleStopEdit = () => {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <NoteContentEdit
                note={note}
                onStopEdit={handleStopEdit}
            />
        )
    }

    return (
        <S.NoteContent
            tabIndex={0}
            onClick={handleStartEdit}
        >
            { note.content }
        </S.NoteContent>
    );
}

export default NoteContent;
