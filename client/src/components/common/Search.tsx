import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import useDebounce from '../../hooks/Debounce';

const Search = () => {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce(value, 200);

    //TODO: update redux search field with the debounced value

    return (
        <Input variant="filled" placeholder="Seach for beer" value={value} onChange={(e) => setValue(e.target.value)} />
    );
};

export default Search;
