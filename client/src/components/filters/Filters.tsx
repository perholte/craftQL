import { HStack } from '@chakra-ui/react';
import React from 'react';
import Search from './Search';
import Sort from './Sort';

const Filters: React.FC = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <HStack w="100%" justifyContent="space-between" wrap="wrap" alignItems="flex-end">
                <Search />
                <Sort />
            </HStack>
        </form>
    );
};

export default Filters;
