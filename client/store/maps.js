import { createSlice } from '@reduxjs/toolkit';

const mapsSlice = createSlice({
    name: 'maps',
    initialState: {
        mapPosition: { lat: 40.73314736440049, lng: -74.00142514545243 },
    },
    reducers: {
        setMapPosition(state, action) {
            state.mapPosition = action.payload;
        },
    },
});

export const { setMapPosition } = mapsSlice.actions;
export default mapsSlice.reducer;

// 40.73314736440049, -74.00142514545243
