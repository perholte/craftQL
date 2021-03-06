import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { setSortingChoice, SortOptions } from '../../redux/slices/sortSlice';
import { RootState, useAppDispatch } from '../../redux/store';

const Sort: React.FC = () => {
    const dispatch = useAppDispatch();
    const selected = useSelector((state: RootState) => state.sort.sortOption);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortingChoice(e.target.value as SortOptions));
    };

    return (
        <FormControl minW="100px" w="12em" pt="2rem" margin="auto 0">
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
