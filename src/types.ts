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
    category: Category['id'];
}

export type NoteList = Note[];
export type AdderNote = Pick<Note, 'content' | 'category'>;
export type UpdaterNote = Partial<Omit<Note, 'id' | 'createAt'>>;
export type RemoverNote = Note['id'];
