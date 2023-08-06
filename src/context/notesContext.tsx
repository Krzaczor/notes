import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';
import { NoteList } from 'types';
import {
    CreateNoteAction,
    UpdateOneNoteAction,
    UpdateManyNotesAction,
    RemoveOneNoteAction,
    RemoveManyNotesAction,
    RemoveAllNotesAction,
    NotesState,
} from './notesContext.types';

const initNotes: NoteList = [];

export const useNotesState = create(
    persist<NotesState>(
        () => ({
            notes: initNotes
        }),
        {
            name: 'notes/notes'
        }
    )
)

export const createNote: CreateNoteAction = ({ content, category, priority }) => {
    useNotesState.setState(state => ({
        notes: state.notes.concat({
            id: nanoid(8),
            createAt: new Date(),
            done: null,
            priority,
            category,
            content,
        })
    }))
}

export const updateOneNote: UpdateOneNoteAction = (id, fields) => {
    useNotesState.setState(state => ({
        notes: state.notes.map(note => {
            return note.id !== id ? note : Object.assign(note, fields);
        })
    }))
}

export const updateManyNotes: UpdateManyNotesAction = (ids, fields) => {
    useNotesState.setState(state => ({
        notes: state.notes.map(note => {
            return !ids.includes(note.id) ? note : Object.assign(note, fields);
        })
    }))
}

export const removeOneNote: RemoveOneNoteAction = (id) => {
    useNotesState.setState(state => ({
        notes: state.notes.filter(note => note.id !== id)
    }));
}

export const removeManyNotes: RemoveManyNotesAction = (ids) => {
    useNotesState.setState(state => ({
        notes: state.notes.filter(note => !ids.includes(note.id))
    }));
}

export const removeAllNotes: RemoveAllNotesAction = () => {
    useNotesState.setState({
        notes: initNotes
    });
}
