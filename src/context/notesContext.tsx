import { useState, createContext, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getNotesStorage, setNotesStorage } from 'storage/notesStorage';
import {
    NotesProps,
    NotesState,
    NotesActions,
    CreateNoteAction,
    UpdateOneNoteAction,
    UpdateManyNotesAction,
    RemoveOneNoteAction,
    RemoveManyNotesAction,
    RemoveAllNotesAction
} from './notesContext.types';
import { ErrorStorage, NoteList, ResetErrorAction } from 'types';

const NotesContextState = createContext<NotesState>(null!);
const NotesContextActions = createContext<NotesActions>(null!);

const initNotes: NoteList = [];

export const NotesProvider = ({ children }: NotesProps) => {
    const [error, setError] = useState<ErrorStorage>(null);
    const [notes, setNotes] = useState<NoteList>(() => {
        try {
            const notesStorage = getNotesStorage();
            return notesStorage ? notesStorage : initNotes;
        } catch (error) {
            setError((error as Error).message);
            return initNotes;
        }
    });

    useEffect(() => {
        setNotesStorage(notes);
    }, [notes]);

    const createNote: CreateNoteAction = ({ content, category }) => {
        setNotes(prevNotes => prevNotes.concat({
            id: nanoid(8),
            createAt: new Date(),
            done: null,
            priority: false,
            category: category.toString(),
            content: content.toString(),
        }))
    }

    const updateOneNote: UpdateOneNoteAction = (id, fields) => {
        setNotes(prevNotes => {
            return prevNotes.map(note => {
                return note.id === id ? note : Object.assign(note, fields);
            })
        })
    }

    const updateManyNotes: UpdateManyNotesAction = (ids, fields) => {
        setNotes(prevNotes => {
            return prevNotes.map(note => {
                return !ids.includes(note.id) ? note : Object.assign(note, fields);
            })
        })
    }

    const removeOneNote: RemoveOneNoteAction = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    const removeManyNotes: RemoveManyNotesAction = (ids) => {
        setNotes(prevNotes => prevNotes.filter(note => !ids.includes(note.id)));
    }

    const removeAllNotes: RemoveAllNotesAction = () => {
        setNotes(initNotes);
    }

    const resetError: ResetErrorAction = () => setError(null);

    return (
        <NotesContextState.Provider value={{ error, notes }}>
            <NotesContextActions.Provider value={{
                createNote,
                updateOneNote,
                updateManyNotes,
                removeOneNote,
                removeManyNotes,
                removeAllNotes,
                resetError
            }}>
                { children }
            </NotesContextActions.Provider>
        </NotesContextState.Provider>
    )
}

export const useNotesState = () => useContext(NotesContextState);
export const useNotesActions = () => useContext(NotesContextActions);
