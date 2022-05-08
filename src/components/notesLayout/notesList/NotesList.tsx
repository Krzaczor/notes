import { useNotesState } from 'context/notesContext';
import { useLocation } from 'react-router-dom';
import { NoteList } from 'types';
import NoteItem from './noteItem/NoteItem';
import * as S from './NotesList.styles';

const NotesList = () => {
    const { notes } = useNotesState();
    const { pathname } = useLocation();

    let notesList: NoteList = [...notes];

    if (pathname === '/undone') {
        notesList = notes.filter(note => !note.done);
    }

    if (pathname === '/priority') {
        notesList = notes.filter(note => note.priority);
    }

    return (
        <S.NotesList>
            {notesList.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
        </S.NotesList>
    )
}

export default NotesList;
