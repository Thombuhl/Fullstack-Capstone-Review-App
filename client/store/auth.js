import axios from 'axios';
import history from '../history';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const TOKEN = 'token';

const me = createAsyncThunk('auth/me', async () => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
        const response = await axios.get('/api/auth/me', {
            headers: {
                authorization: token,
            },
        });
        return response.data;
    }
});

const authenticate = createAsyncThunk(
    'auth/authenticate',
    async (arg, { dispatch }) => {
        const response = await axios.post(`/api/auth/${arg.formName}`, {
            username: arg.username,
            password: arg.password,
        });
        window.localStorage.setItem(TOKEN, response.data.token);
        dispatch(me());
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: { auth: {} },
    reducers: {
        logout(state, action) {
            window.localStorage.removeItem(TOKEN);
            history.push('/login');
            state.auth = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(me.fulfilled, (state, action) => {
            state.auth = { ...action.payload };
        });
        builder.addCase(authenticate.rejected, (state, action) => {
            state.auth = { error: action.payload };
        });
        builder.addCase(authenticate.fulfilled, (state, action) => {});
    },
});

export const { logout } = authSlice.actions;
export { authenticate, me };
export default authSlice.reducer;

/**
 * ACTION TYPES
 */

// const SET_AUTH = 'SET_AUTH';

/**
 * ACTION CREATORS
 */

// const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */

// export const me = () => async (dispatch) => {
//     const token = window.localStorage.getItem(TOKEN);
//     if (token) {
//         const res = await axios.get('/auth/me', {
//             headers: {
//                 authorization: token,
//             },
//         });
//         return dispatch(setAuth(res.data));
//     }
// };

// export const authenticate =
//     (username, password, method) => async (dispatch) => {
//         try {
//             const res = await axios.post(`/auth/${method}`, {
//                 username,
//                 password,
//             });
//             window.localStorage.setItem(TOKEN, res.data.token);
//             dispatch(me());
//         } catch (authError) {
//             return dispatch(setAuth({ error: authError }));
//         }
//     };

// export const logout = () => {
//     window.localStorage.removeItem(TOKEN);
//     history.push('/login');
//     return {
//         type: SET_AUTH,
//         auth: {},
//     };
// };

/**
 * REDUCER
 */
// export default function (state = {}, action) {
//     switch (action.type) {
//         case SET_AUTH:
//             return action.auth;
//         default:
//             return state;
//     }
// }
