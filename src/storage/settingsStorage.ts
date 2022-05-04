import { getItem, setItem } from './storage';
import { Settings } from 'types';

const name = 'notes/settings';

export const getSettingsStorage = (): Settings | null => {
    return getItem(name);
}

export const setSettingsStorage = (value: Settings) => {
    setItem(name, value);
}
