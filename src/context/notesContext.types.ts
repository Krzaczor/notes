import { ReactNode } from 'react';
import { AdderNote, ErrorStorage, NoteList, ResetErrorAction, UpdaterNote } from 'types';

export type CreateNoteAction = (note: AdderNote) => void;
export type UpdateOneNoteAction = (id: string, fields: UpdaterNote) => void;
export type UpdateManyNotesAction = (ids: string[], fields: UpdaterNote) => void;
export type RemoveOneNoteAction = (id: string) => void;
export type RemoveManyNotesAction = (ids: string[]) => void;
export type RemoveAllNotesAction = () => void;

export interface NotesState {
    error: ErrorStorage;
    notes: NoteList;
}

export interface NotesActions {
    resetError: ResetErrorAction;
    createNote: CreateNoteAction;
    updateOneNote: UpdateOneNoteAction;
    updateManyNotes: UpdateManyNotesAction;
    removeOneNote: RemoveOneNoteAction;
    removeManyNotes: RemoveManyNotesAction;
    removeAllNotes: RemoveAllNotesAction;
}

export interface NotesProps {
    children: ReactNode;
}
