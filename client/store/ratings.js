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

const deleteRating = createAsyncThunk(
    'ratings/deleteRating',
    async (rating) => {
        const response = await axios.delete(`/api/ratings/${rating.id}`, {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        });
        return rating;
    }
);

const createRating = createAsyncThunk(
    'ratings/createRating',
    async (rating) => {
        const response = (
            await axios.post('/api/ratings/', rating, {
                headers: {
                    authorization: window.localStorage.getItem('token'),
                },
            })
        ).data;
        return response;
    }
);

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
        builder.addCase(createRating.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(deleteRating.fulfilled, (state, action) => {
            return (state = state.filter(
                (rating) => rating.id !== action.payload.id
            ));
        });
    },
});

export const { addRating } = ratingsSlice.actions;
export { fetchRatings, createRating, deleteRating };
export default ratingsSlice.reducer;
