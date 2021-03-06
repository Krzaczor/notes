import { ChangeEvent, FormEvent, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useNotesActions } from 'context/notesContext';
import { useSettingsState } from 'context/settingsContext';
import Button from 'components/shared/button/Button';
import Input from 'components/shared/input/Input';
import * as S from './NoteForm.styles';

interface Props {
    category: string;
}

const NoteForm = ({ category }: Props) => {
    const [contentValue, setContentValue] = useState('');
    const { settings } = useSettingsState();
    const { createNote } = useNotesActions();

    const handleChangeContentValue = (event: ChangeEvent<HTMLInputElement>) => {
        setContentValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (contentValue.trim() === '') {
            return;
        }

        createNote({
            category,
            content: contentValue.trim(),
            priority: settings.defaultPriority
        });

        setContentValue('');
    }

    return (
        <S.NoteForm onSubmit={handleSubmit}>
            <Input
                type='text'
                placeholder='Treść nowej notki'
                value={contentValue}
                onChange={handleChangeContentValue}
            />
            <Button variant='primary'>
                <BsPlusLg size={22} color='var(--color-light)' />
            </Button>
        </S.NoteForm>
    )
}

export default NoteForm
