import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import * as contactsApi from './contacts-operations';
import { logOut } from 'Redux/auth/auth-operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(contactsApi.fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactsApi.fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(contactsApi.fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(contactsApi.addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactsApi.addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(contactsApi.addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(contactsApi.deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactsApi.deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const contactId = action.payload;
        state.items = state.items.filter(contact => contact.id !== contactId);
      })
      .addCase(contactsApi.deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(contactsApi.updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactsApi.updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [];
      })
      .addCase(contactsApi.updateContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'root',
  storage,
  serializeConfig: {
    options: {
      ignoredActions: ['register'],
    },
  },
  deserializeConfig: {
    options: {
      ignoredActions: ['register'],
    },
  },
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
