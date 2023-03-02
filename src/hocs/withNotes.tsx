import { ComponentType } from 'react';
import { useNotesState } from 'context/notesContext';
import { useCategory } from 'hooks/useCategory';

export const withNotes = <T = {}>(Component: ComponentType<T>) => {
    return (props: Omit<T, "notes" | "categoryId">) => {
        const { categoryId } = useCategory();
        const { notes } = useNotesState();

        let notesList = [...notes];

        if (categoryId) {
            notesList = notesList.filter(note => note.category === categoryId);
        }

        return <Component {...(props as T)} notes={notesList} categoryId={categoryId} />;
    }
}
