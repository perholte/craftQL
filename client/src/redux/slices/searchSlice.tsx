import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    value: string;
}

const initialState: SearchState = {
    value: '',
};

export const counterSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        clearSearch: (state) => {
            state.value = '';
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = counterSlice.actions;

export default counterSlice.reducer;
