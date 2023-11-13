import { ChangeEvent, FormEvent, useState } from 'react';
import { updateOneNote } from 'context/notesContext';
import useOnClickEsc from 'hooks/useOnClickEsc';
import Input from 'features/shared/input/Input';
import s from './NoteContentEdit.module.scss';
import { Props } from './NoteContentEdit.types';

const NoteContentEdit = ({ note, onStopEdit }: Props) => {
    const [tempValue, setTempValue] = useState(note.content);

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
        <form
            className={s.root}
            onSubmit={handleUpdateContentNote}>
            <Input
                value={tempValue}
                onChange={handleTempValue}
                onBlur={onStopEdit}
                autoFocus
            />
        </form>
    )
}

export default NoteContentEdit;
