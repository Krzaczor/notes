import s from './EmptyList.module.scss';

const EmptyList = () => {
    return (
        <div className={s.root}>
            <p>Brak notatek do wyświetlenia</p>
            <p>Dodaj notatkę, wybierz lub stwórz kategorie</p>
        </div>
    )
}

export default EmptyList;
