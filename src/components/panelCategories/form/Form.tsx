import { ChangeEvent, FormEvent, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useCategoriesActions } from 'context/categoriesContext';
import Input from 'components/shared/input/Input';
import Button from 'components/shared/button/Button';
import * as S from './Form.styles';

const Form = () => {
    const [name, setName] = useState('');
    const { createCategory } = useCategoriesActions();

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleCreateCategory = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (name.trim() === '') {
            return;
        }

        createCategory({
            name: name.trim()
        });
        
        setName('');
    }

    return (
        <S.Form onSubmit={handleCreateCategory}>
            <Input
                type='text'
                value={name}
                placeholder='Treść nowej kategorii'
                onChange={handleChangeName}
            />
            <Button variant='primary'>
                <BsPlusLg size={22} color='var(--color-light)' />
            </Button>
        </S.Form>
    )
}

export default Form;
