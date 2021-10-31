import { Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
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
        <Flex
            w="auto"
            minW="175px"
            display="flex"
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="flex-start"
            flexWrap="wrap"
        >
            <FormControl w="auto" display="flex" flexDirection="column">
                <FormLabel>Search in category:</FormLabel>
                <Input
                    minW="100%"
                    w="18rem"
                    variant="filled"
                    placeholder="Search beers"
                    value={value}
                    onChange={updateText}
                />
            </FormControl>
            <FormControl w="auto" display="flex" flexDirection="column" mt="1rem">
                <FormLabel maxW="12em">Category:</FormLabel>
                <Select value={field} onChange={updateCategory} w="12em">
                    <option value={FilterField.All}>{FilterField.All}</option>
                    <option value={FilterField.Name}>{FilterField.Name}</option>
                    <option value={FilterField.Brand}>{FilterField.Brand}</option>
                    <option value={FilterField.Type}>{FilterField.Type}</option>
                </Select>
            </FormControl>
        </Flex>
    );
};

export default Search;
