import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;