import { Category } from 'types';

export interface Props {
    id?: Category['id'];
    name: string;
    isActive: boolean;
    to: string;
    onCloseCategory: () => void;
}
