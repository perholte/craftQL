import React, { useEffect, useState } from 'react';
import { FormControl, Input, FormLabel } from '@chakra-ui/react';
import useDebounce from '../../hooks/Debounce';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/searchSlice';

const Search = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        dispatch(setSearchValue(debouncedValue));
    }, [dispatch, debouncedValue]);

    return (
        <FormControl w="40%" minW="175px">
            <FormLabel> Search beers by name, label or type: </FormLabel>
            <Input
                variant="filled"
                placeholder="Seach for beer"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </FormControl>
    );
};

export default Search;
