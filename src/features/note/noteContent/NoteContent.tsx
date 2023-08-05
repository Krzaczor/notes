import { useState } from 'react';
import NoteContentEdit from '../noteContentEdit/NoteContentEdit';
import s from './NoteContent.module.scss';
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
        <p 
            className={s.root}
            tabIndex={0}
            onClick={handleStartEdit}
        >
            { note.content }
        </p>
    );
}

export default NoteContent;
