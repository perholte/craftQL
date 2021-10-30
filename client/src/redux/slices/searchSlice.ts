import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SearchFilter {
    name = 'name',
    brand = 'brand',
    type = 'type',
    all = 'all',
}

export interface SearchState {
    value: string;
    filter: SearchFilter;
}

const initialState: SearchState = {
    value: '',
    filter: SearchFilter.name,
};

export const counterSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setSearchCategory: (state, action: PayloadAction<SearchFilter>) => {
            state.filter = action.payload;
        },
        clearSearch: (state) => {
            state.value = '';
            state.filter = SearchFilter.name;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setSearchCategory } = counterSlice.actions;

export default counterSlice.reducer;
