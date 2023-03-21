import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  isLoading: false,
  error: null,
  filterQuery: "",
  activeColor: "",
  currentNote: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, { payload, type }) => {
        state.notes.unshift(payload);
      },
      prepare: (notes, activeColor) => {
        return {
          payload: {
            id: nanoid(10),
            note: notes,
            color: activeColor,
          },
        };
      },
    },
    changeNoteActiveColor: (state, { payload, type }) => {
      state.activeColor = payload;
    },
    deleteNote: (state, { payload, type }) => {
      state.notes = state.notes.filter(
        (note) => note.id !== state.currentNote.id
      );
    },
    searchNote: (state, { payload, type }) => {
      state.filterQuery = payload;
    },
  },
});

export const { addNote, deleteNote, searchNote, changeNoteActiveColor } =
  notesSlice.actions;

export default notesSlice.reducer;
