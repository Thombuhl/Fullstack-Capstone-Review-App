import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updatePreferenceValue = createAsyncThunk(
    'user/preferences',
    async (payload) => {
        const response = await axios.put(
            '/api/routes/userpref/preferences',
            { payload },
            {
                headers: {
                    authorization: window.localStorage.getItem('token'),
                },
            }
        );
        return response.data;
    }
);

const fetchPreferences = createAsyncThunk(
    'fetch/preferences_from_db',
    async () => {
        const response = await axios.get('/api/routes/preference', {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        });
        return response.data;
    }
);

const prefrenceSlice = createSlice({
    name: 'preference',
    initialState: {},
    reducers: {
        setPreferenceValue(state, action) {
            state.action = action.payload;
        },
        addPreference(state, action) {
            const { payload } = action;
            state.prefNames = payload;
        },
    },
});

export const { setPreferenceValue, addPreference } = prefrenceSlice.actions;
export { updatePreferenceValue, fetchPreferences };
export default prefrenceSlice.reducer;
