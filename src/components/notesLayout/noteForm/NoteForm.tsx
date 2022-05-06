import { ChangeEvent, FormEvent, useState } from 'react';
import { useNotesActions } from 'context/notesContext';
import { useSettingsState } from 'context/settingsContext';
import Button from 'components/shared/button/Button';
import * as S from './NoteForm.styles';

const TEMP_CATEGORY = 'H3jdiisa';

const NoteForm = () => {
    const [contentValue, setContentValue] = useState('');
    const { settings } = useSettingsState();
    const { createNote } = useNotesActions();

    const handleChangeContentValue = (event: ChangeEvent<HTMLInputElement>) => {
        setContentValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createNote({
            content: contentValue,
            category: TEMP_CATEGORY,
            priority: settings.defaultPriority
        });

        setContentValue('');
    }

    return (
        <S.NoteForm onSubmit={handleSubmit}>
            <S.Input type='text' placeholder='Treść nowej notki' value={contentValue} onChange={handleChangeContentValue} />
            <Button variant='primary'>a</Button>
        </S.NoteForm>
    )
}

export default NoteForm
