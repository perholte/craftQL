import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/react';
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
        <Input variant="filled" placeholder="Seach for beer" value={value} onChange={(e) => setValue(e.target.value)} />
    );
};

export default Search;
