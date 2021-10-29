import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BeerOrder, Sort } from '../../generated/graphql';

export enum SortOptions {
    AlphabeticASC = 'Name: A - Z',
    AlphabeticDESC = 'Name: Z - A',
    BrandASC = 'Brand: A - Z',
    BrandDESC = 'Brand: Z - A',
    TypeASC = 'Type A - Z',
    TypeDESC = 'Type Z - A',
    AlcoholASC = 'Most alcohol',
    AlcoholDESC = 'Least alcohol',
}

const sortOptionToGraphqlParams = new Map<SortOptions, BeerOrder>([
    [SortOptions.AlphabeticASC, { name: Sort.Asc }],
    [SortOptions.AlphabeticDESC, { name: Sort.Desc }],
    [SortOptions.BrandASC, { brand: Sort.Asc }],
    [SortOptions.BrandDESC, { brand: Sort.Desc }],
    [SortOptions.TypeASC, { type: Sort.Asc }],
    [SortOptions.TypeDESC, { type: Sort.Desc }],
    [SortOptions.AlcoholASC, { abv: Sort.Asc }],
    [SortOptions.AlcoholDESC, { abv: Sort.Desc }],
]);

export interface SortState {
    sortOption: SortOptions;
    graphqlParams: BeerOrder;
}

const initialState: SortState = {
    sortOption: SortOptions.AlphabeticASC,
    graphqlParams: sortOptionToGraphqlParams.get(SortOptions.AlphabeticASC) as BeerOrder,
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortingChoice: (state, action: PayloadAction<SortOptions>) => {
            state.sortOption = action.payload;
            state.graphqlParams = sortOptionToGraphqlParams.get(action.payload) as BeerOrder;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSortingChoice } = sortSlice.actions;

export default sortSlice.reducer;
