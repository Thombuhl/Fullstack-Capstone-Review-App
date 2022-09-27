import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async (property) => {
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
    initialState: { restaurants: [] },
    reducers: {
        addRestaurant(state, action) {
            state.restaurants.push(action.payload);
        },
        filterRestaurants(state, action) {
            state.restaurants = [...action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.restaurants.push(...action.payload);
        });
    },
});

export const { addRestaurant, filterRestaurants } = restaurantsSlice.actions;
export { fetchRestaurants };
export default restaurantsSlice.reducer;
