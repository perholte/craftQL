import { Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterField } from '../../generated/graphql';
import useDebounce from '../../hooks/Debounce';
import { setSearchValue, setSearchCategory } from '../../redux/slices/searchSlice';
import { RootState, useAppDispatch } from '../../redux/store';

const Search: React.FC = () => {
    const { value: startValue, field } = useSelector((state: RootState) => state.search);
    const [value, setValue] = useState<string>(startValue || '');
    const dispatch = useAppDispatch();
    const debouncedValue = useDebounce(value, 500);
    useEffect(() => {
        dispatch(setSearchValue(debouncedValue));
    }, [dispatch, debouncedValue]);

    const updateText = (evt: ChangeEvent<HTMLInputElement>): void => {
        setValue(evt?.target?.value);
    };

    const updateCategory = (evt: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSearchCategory(evt?.target?.value as FilterField));
    };
    return (
        <Box w="40%" minW="175px" display="flex" flexDirection="row" alignItems="flex-end" justifyContent="flex-start">
            <FormControl w="auto">
                <FormLabel maxW="12em">Category:</FormLabel>
                <Select value={field} onChange={updateCategory} maxW="6em">
                    <option value={FilterField.Name}>{FilterField.Name}</option>
                    <option value={FilterField.Brand}>{FilterField.Brand}</option>
                    <option value={FilterField.Type}>{FilterField.Type}</option>
                    <option value={FilterField.All}>{FilterField.All}</option>
                </Select>
            </FormControl>
            <FormControl w="auto">
                <FormLabel>Search:</FormLabel>
                <Input
                    w="100%"
                    variant="filled"
                    placeholder="Search beers by name, label, type or all fields"
                    value={value}
                    onChange={updateText}
                />
            </FormControl>
        </Box>
    );
};

export default Search;
