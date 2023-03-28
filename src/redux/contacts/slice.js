import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { removeContact } from './operations';
import { addContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    searchStr: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.searchStr = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        const itemIndex = state.contacts.items.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.items.splice(itemIndex, 1);
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.contacts.isLoading = false;
        }
      );
  },
});

export const contactsReducer = contactSlice.reducer;

export const { changeFilter } = contactSlice.actions;
