import Button from 'components/shared/button/Button';
import Navigation from 'components/navigation/Navigation';
import CategoryName from 'components/categoryName/CategoryName';

const CommonPage = () => {
    return (
        <Navigation>
            <Button variant='second'>s</Button>
            <CategoryName />
            <Button variant='second'>s</Button>
            <Button variant='second'>s</Button>
        </Navigation>
    )
}

export default CommonPage;
