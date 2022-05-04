import { getItem, setItem } from './storage';
import type { NoteList } from 'types';

const name = 'notes/notes';

export const getNotesStorage = (): NoteList | null => {
    return getItem(name);
}

export const setNotesStorage = (value: NoteList): void => {
    setItem(name, value);
}
