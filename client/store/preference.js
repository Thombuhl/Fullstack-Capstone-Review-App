import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updatePreferenceValue = createAsyncThunk(
    'user/preferences',
    async (payload) => {
        const response = await axios.put(
            '/api/userpref/preferences',
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
        const response = await axios.get('/api/preference', {
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
        const response = await axios.get('/api/userpref/preferences', {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        });
        return response.data;
    }
);

const fetchPrefLabel = createAsyncThunk(
    '/preferenceLabel/allLabels',
    async (payload) => {
        const response = await axios.get('/api/preferenceLabel/allLabels', {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        });
        return response.data;
    }
);

const prefrenceSlice = createSlice({
    name: 'preference',
    initialState: { prefNames: [], userPref: [], prefLabel: [] },
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
        setPreferenceLabel(state, action) {
            const { payload } = action;
            state.prefLabel = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPreferences.fulfilled, (state, action) => {
            state.prefNames = [...action.payload];
        });
        builder.addCase(fetchUserPreferences.fulfilled, (state, action) => {
            const newPref = action.payload.sort(
                (a, b) => a.preferenceId - b.preferenceId
            );
            state.userPref = newPref;
        });
    },
});

export const {
    setPreferenceValue,
    addPreference,
    setUserPreference,
    setPreferenceLabel,
} = prefrenceSlice.actions;
export {
    updatePreferenceValue,
    fetchPreferences,
    fetchUserPreferences,
    fetchPrefLabel,
};
export default prefrenceSlice.reducer;
