// features/app/appSlice.js
import {createSlice} from '@reduxjs/toolkit';
import { getArtist, getTrack } from './appActions';

const initialState = {
  loading: false,
  success: false, // for monitoring the registration process.
  tracks: [],
  error: null,
  selectedTrack: null,
  artistData: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedTrack: (state, action) => {
      state.selectedTrack = action.payload;
    },
    resetArtistData: (state) => {
      state.artistData = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getTrack.pending, state => {
        state.loading = true;
      })
      .addCase(getTrack.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
        state.success = true;
      })
      .addCase(getTrack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });

    builder
      .addCase(getArtist.pending, state => {
        state.loading = true;
      })
      .addCase(getArtist.fulfilled, (state, action) => {
        console.log({action});
        state.loading = false;
        state.artistData = action.payload;
        state.success = true;
      })
      .addCase(getArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
    }
});

export const {setSelectedTrack, resetArtistData } = appSlice.actions;


export default appSlice.reducer;
