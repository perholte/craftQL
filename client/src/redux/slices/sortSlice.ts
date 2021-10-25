import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SortOptions {
    AlphabeticASC = 'a',
    AlphabeticDESC = 'b',
    RatingASC = 'c',
    RatingDESC = 'd',
    AlcoholASC = 'e',
    AlcoholDESC = 'f',
}

export interface SortState {
    value: SortOptions;
}

const initialState: SortState = {
    value: SortOptions.AlphabeticASC,
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortingChoice: (state, action: PayloadAction<SortOptions>) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSortingChoice } = sortSlice.actions;

export default sortSlice.reducer;
