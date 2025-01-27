import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSeries = createAsyncThunk('series/fetchSeries', async () => {
  const response = await axios.get('/src/utils/sample.json');
  return response.data.entries.filter(item => item.programType === 'series' && item.releaseYear >= 2010)
                              .sort((a, b) => a.title.localeCompare(b.title));
});

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    series: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.series = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default seriesSlice.reducer;
