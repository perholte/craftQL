import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import searchReducer from './slices/searchSlice';
import sortReducer from './slices/sortSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        sort: sortReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line
export const useAppDispatch = () => useDispatch<AppDispatch>();
