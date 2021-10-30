import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterField } from '../../generated/graphql';

export interface SearchState {
    value: string;
    field: FilterField;
}

const initialState: SearchState = {
    value: '',
    field: FilterField.Name,
};

export const counterSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setSearchCategory: (state, action: PayloadAction<FilterField>) => {
            state.field = action.payload;
        },
        clearSearch: (state) => {
            state.value = '';
            state.field = FilterField.Name;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setSearchCategory } = counterSlice.actions;

export default counterSlice.reducer;
