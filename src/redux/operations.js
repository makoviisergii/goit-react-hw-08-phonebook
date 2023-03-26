import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        `https://641d9f0b0596099ce15027e9.mockapi.io/contacts`
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkApi) => {
    try {
      const response = await axios.post(
        `https://641d9f0b0596099ce15027e9.mockapi.io/contacts`,
        { ...contact }
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkApi) => {
    try {
      await axios.delete(
        `https://641d9f0b0596099ce15027e9.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
