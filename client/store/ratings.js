import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchRatings = createAsyncThunk('ratings/fetchRatings', async () => {
    const response = await axios.get('/api/ratings', {
        headers: {
            authorization: window.localStorage.getItem('token'),
        },
    });
    return response.data;
});

const ratingsSlice = createSlice({
    name: 'ratings',
    initialState: [],
    reducers: {
        addRating(state, action) {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRatings.fulfilled, (state, action) => {
            state.push(...action.payload);
        });
    },
});

export const { addRating } = ratingsSlice.actions;
export { fetchRatings };
export default ratingsSlice.reducer;
