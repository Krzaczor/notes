import { AdderNote, UpdaterNote, NoteList } from 'types';

export interface NotesState {
    notes: NoteList
}

export type CreateNoteAction = (note: AdderNote) => void;
export type UpdateOneNoteAction = (id: string, fields: UpdaterNote) => void;
export type UpdateManyNotesAction = (ids: string[], fields: UpdaterNote) => void;
export type RemoveOneNoteAction = (id: string) => void;
export type RemoveManyNotesAction = (ids: string[]) => void;
export type RemoveAllNotesAction = () => void;
export type ResetErrorAction = () => void;
