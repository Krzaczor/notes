export interface Category {
    id: string;
    name: string;
    createAt: Date;
}

export type CategoryList = Category[];
export type AdderCategory = Pick<Category, 'name'>;
export type UpdaterCategory = Pick<Category, 'name'>;
export type RemoverCategory = Category['id'];

export interface Note {
    id: string;
    content: string;
    done: Date | null;
    createAt: Date;
    priority: boolean;
    category: Category['id'];
}

export type NoteList = Note[];
export type AdderNote = Pick<Note, 'content' | 'priority' | 'category'>;
export type UpdaterNote = Partial<Omit<Note, 'id' | 'createAt'>>;
export type RemoverNote = Note['id'];

export interface Settings {
    lightMode: boolean;
    defaultPriority: boolean;
    displayCreateAtNote: boolean;
}

export type UpdateSettings = keyof Settings;

export type ErrorStorage = string | null;
export type ResetErrorAction = () => void;
