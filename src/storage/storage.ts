const storage: Storage = localStorage;

export const getItem = <T>(name: string): T | null => {
    const result = storage.getItem(name);
    return result === null ? null : JSON.parse(result);
}

export const setItem = <T>(name: string, value: T): void => {
    storage.setItem(name, JSON.stringify(value));
}
