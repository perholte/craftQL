import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { setSortingChoice, SortOptions } from '../../redux/slices/sortSlice';
import { RootState, useAppDispatch } from '../../redux/store';

const Sort: React.FC = () => {
    const dispatch = useAppDispatch();
    const selected = useSelector((state: RootState) => state.sort.value);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortingChoice(e.target.value as SortOptions));
    };

    return (
        <FormControl w="30%" minW="100px">
            <FormLabel>Sort beers by: </FormLabel>
            <Select onChange={handleChange} value={selected}>
                {Object.values(SortOptions).map((so) => (
                    <option value={so} key={so}>
                        {so}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default Sort;
