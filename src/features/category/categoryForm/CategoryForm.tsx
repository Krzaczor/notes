import { ChangeEvent, FormEvent, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { createCategory } from 'context/categoriesContext';
import Input from 'features/shared/input/Input';
import Button from 'features/shared/button/Button';
import s from './CategoryForm.module.scss';

const Form = () => {
    const [name, setName] = useState('');

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
        <form className={s.root} onSubmit={handleCreateCategory}>
            <Input
                type='text'
                value={name}
                placeholder='Treść nowej kategorii'
                onChange={handleChangeName}
            />
            <Button variant='primary'>
                <BsPlusLg size={22} color='var(--color-light)' />
            </Button>
        </form>
    )
}

export default Form;
