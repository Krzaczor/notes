import { ChangeEvent, FormEvent, useState } from 'react';
import { useNotesActions } from 'context/notesContext';
import useOnClickEsc from 'hooks/useOnClickEsc';
import Input from 'components/shared/input/Input';
import { Props } from './NoteContentEdit.types';

const NoteContentEdit = ({ note, onStopEdit }: Props) => {
    const [tempValue, setTempValue] = useState(note.content);
    const { updateOneNote } = useNotesActions();

    const handleTempValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTempValue(event.target.value);
    }

    const handleUpdateContentNote = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!note) return;

        if (tempValue.trim() === '') {
            return;
        }

        updateOneNote(note.id, {
            content: tempValue.trim(),
        });

        onStopEdit();
    }

    useOnClickEsc(onStopEdit);

    return (
        <form onSubmit={handleUpdateContentNote} style={{ flex: 1 }}>
            <Input value={tempValue} onChange={handleTempValue} onBlur={onStopEdit} autoFocus />
        </form>
    )
}

export default NoteContentEdit;
