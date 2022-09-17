import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async () => {
        const response = await axios.get('/api/restaurants', {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        });
        return response.data;
    }
);

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: [],
    reducers: {
        addRestaurant(state, action) {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.push(...action.payload);
        });
    },
});

export const { addRestaurant } = restaurantsSlice.actions;
export { fetchRestaurants };
export default restaurantsSlice.reducer;
