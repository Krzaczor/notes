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
            notes: []
        }),
        {
            name: 'notes/notes'
        }
    )
)

const createNote: CreateNoteAction = ({ content, category, priority }) => {
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

const updateOneNote: UpdateOneNoteAction = (id, fields) => {
    useNotesState.setState(state => ({
        notes: state.notes.map(note => {
            return note.id !== id ? note : Object.assign(note, fields);
        })
    }))
}

const updateManyNotes: UpdateManyNotesAction = (ids, fields) => {
    useNotesState.setState(state => ({
        notes: state.notes.map(note => {
            return !ids.includes(note.id) ? note : Object.assign(note, fields);
        })
    }))
}

const removeOneNote: RemoveOneNoteAction = (id) => {
    useNotesState.setState(state => ({
        notes: state.notes.filter(note => note.id !== id)
    }));
}

const removeManyNotes: RemoveManyNotesAction = (ids) => {
    useNotesState.setState(state => ({
        notes: state.notes.filter(note => !ids.includes(note.id))
    }));
}

const removeAllNotes: RemoveAllNotesAction = () => {
    useNotesState.setState({
        notes: initNotes
    });
}

export const useNotesActions = () => ({
    createNote,
    updateOneNote,
    updateManyNotes,
    removeOneNote,
    removeManyNotes,
    removeAllNotes
})
