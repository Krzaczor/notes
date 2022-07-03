import { useState } from 'react';
import { Props } from './NoteContent.types';
import NoteContentEdit from './noteContentEdit/NoteContentEdit';

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
        <p style={{ margin: '10px' }}
            tabIndex={0}
            onClick={handleStartEdit}
        >
            { note.content }
        </p>
    );
}

export default NoteContent;
