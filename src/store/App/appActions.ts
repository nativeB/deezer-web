import {createAsyncThunk} from '@reduxjs/toolkit';

export const getTrack = createAsyncThunk(
  'app/getTrack',
  async (query: string, {rejectWithValue}) => {
    try {
        // fetch tracks with fetch api
        console.log(process.env)
        const response = await fetch(`${process.env.REACT_APP_API}search?query=${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // convert response to json
        const data = await response.json();
        return data;
    
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue(error.message);
    }
  },
);

export const getArtist = createAsyncThunk(
  'app/getArtist',
  async (id: string, {rejectWithValue}) => {
    try {
        // fetch tracks with fetch api
        console.log(process.env)
        const response = await fetch(`${process.env.REACT_APP_API}artists/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // convert response to json
        const data = await response.json();
        return data;
    
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue(error.message);
    }
  },
);
