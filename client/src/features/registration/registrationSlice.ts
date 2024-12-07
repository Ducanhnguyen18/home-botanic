import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeRequest } from '../../api/makeRequest';

interface MessageType {
    message: string;
    login?: string;
}

interface RegistrationType {
    name: string;
    email: string;
    password: string;
}

interface AuthState {
    login: string | undefined;
    loggedIn: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    login: '',
    loggedIn: false,
    loading: false,
    error: null,
};

export const logoutThunk = createAsyncThunk('api/logout', async (_, { rejectWithValue }) => {
    try {
        const res = await makeRequest<MessageType>('/api/logout');
        return res;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const registrationThunk = createAsyncThunk(
    'api/signup',
    async (newUser: RegistrationType, { rejectWithValue }) => {
        try {
            const res = await makeRequest<MessageType>('/api/signup', {
                method: 'POST',
                data: newUser,
            });
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const loginThunk = createAsyncThunk(
    'api/signin',
    async (user: Omit<RegistrationType, 'name'>, { rejectWithValue }) => {
        try {
            const res = await makeRequest<MessageType>('/api/signin', {
                method: 'POST',
                data: user,
            });
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

// export const addNewPost = createAsyncThunk(
//     'posts/addNewPost',
//     async (newPost: Omit<Post, 'id'>, { rejectWithValue }) => {
//         try {
//             const post = await makeRequest<Post>('/posts', {
//                 method: 'POST',
//                 data: newPost,
//             });
//             return post;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     },
// );

// export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string, { rejectWithValue }) => {
//     try {
//         await makeRequest(`/posts/${postId}`, { method: 'DELETE' });
//         return postId;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.login = '';
                state.loggedIn = false;
                state.loading = false;
            })
            .addCase(logoutThunk.rejected, (state, action) => {
                state.loggedIn = false;
                state.error = action.payload as string;
            })
            .addCase(registrationThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registrationThunk.fulfilled, (state, action: PayloadAction<MessageType>) => {
                state.login = action.payload.login;
                state.loading = false;
                state.loggedIn = true;
            })
            .addCase(registrationThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action: PayloadAction<MessageType>) => {
                state.login = action.payload.login;
                state.loading = false;
                state.loggedIn = true;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        // .addCase(deletePost.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        // })
        // .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        //     state.posts = state.posts.filter((post) => post.id !== action.payload);
        //     state.loading = false;
        // })
        // .addCase(deletePost.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload as string;
        // });
    },
});

export default authSlice.reducer;

// Селекторы
// export const selectAllPosts = (state: RootState) => state.posts.posts;
// export const selectPostsLoading = (state: RootState) => state.posts.loading;
// export const selectPostsError = (state: RootState) => state.posts.error;
