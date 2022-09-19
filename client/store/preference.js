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

const fetchUserPreferences = createAsyncThunk(
    'fetch/userpreferences_from_db',
    async () => {
        const response = await axios.get('/api/routes/userpref/preferences', {
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
            const score = parseInt(action.payload.score);

            const clean = state.userPref.filter(
                (obj) => obj.preferenceId !== action.payload.id
            );

            const dirty = state.userPref.filter(
                (obj) => obj.preferenceId === action.payload.id
            );
            dirty[0].score = score;
            state.userPref = [...clean, ...dirty];
        },
        addPreference(state, action) {
            const { payload } = action;
            state.prefNames = payload;
        },
        setUserPreference(state, action) {
            const { payload } = action;
            state.userPref = payload;
        },
    },
});

export const { setPreferenceValue, addPreference, setUserPreference } =
    prefrenceSlice.actions;
export { updatePreferenceValue, fetchPreferences, fetchUserPreferences };
export default prefrenceSlice.reducer;
