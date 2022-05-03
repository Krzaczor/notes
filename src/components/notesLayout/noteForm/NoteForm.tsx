import Button from 'components/shared/button/Button'
import { FormEvent } from 'react';
import * as S from './NoteForm.styles';

const NoteForm = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <S.NoteForm onSubmit={handleSubmit}>
            <S.Input type='text' placeholder='Treść nowej notki' />
            <Button variant='primary'>a</Button>
        </S.NoteForm>
    )
}

export default NoteForm
