import { ChangeEvent, FormEvent, useState } from 'react';
import { useNotesActions } from 'context/notesContext';
import useOnClickEsc from 'hooks/useOnClickEsc';
import Input from 'components/shared/input/Input';
import * as S from './NoteContentEdit.styles';
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
        <S.NoteContentEdit onSubmit={handleUpdateContentNote}>
            <Input
                value={tempValue}
                onChange={handleTempValue}
                onBlur={onStopEdit}
                autoFocus
            />
        </S.NoteContentEdit>
    )
}

export default NoteContentEdit;
