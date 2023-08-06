import { ChangeEvent, FormEvent, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { createNote } from 'context/notesContext';
import { useSettingsState } from 'context/settingsContext';
import Button from 'features/shared/button/Button';
import Input from 'features/shared/input/Input';
import s from './NoteForm.module.scss';

interface Props {
    category: string;
}

const NoteForm = ({ category }: Props) => {
    const [contentValue, setContentValue] = useState('');
    const defaultPriority = useSettingsState((s) => s.settings.defaultPriority);

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
            priority: defaultPriority
        });

        setContentValue('');
    }

    return (
        <form className={s.root} onSubmit={handleSubmit}>
            <Input
                type='text'
                placeholder='Treść nowej notki'
                value={contentValue}
                onChange={handleChangeContentValue}
            />
            <Button variant='primary'>
                <BsPlusLg size={22} color='var(--color-light)' />
            </Button>
        </form>
    )
}

export default NoteForm
