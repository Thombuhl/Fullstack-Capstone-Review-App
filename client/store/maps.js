import { createSlice } from '@reduxjs/toolkit';

const mapsSlice = createSlice({
    name: 'maps',
    initialState: {
        mapPosition: { lat: 40.75323476064019, lng: -73.98270684615821 },
    },
    reducers: {
        setMapPosition(state, action) {
            state.mapPosition = action.payload;
        },
    },
});

export const { setMapPosition } = mapsSlice.actions;
export default mapsSlice.reducer;
