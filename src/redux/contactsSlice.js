import { createSlice, nanoid } from '@reduxjs/toolkit';
import contacts from '../data/contacts.json';

export const contactsSlice = createSlice({
    initialState: {
        items: [...contacts],
    },
    name: 'contacts',
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: oldPayload => {
                return {
                    payload: {
                        ...oldPayload,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact: (state, action) => {
            const contactId = action.payload;
            state.items = state.items.filter(
                contact => contact.id !== contactId,
            );
        },
    },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
