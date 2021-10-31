import { Flex } from '@chakra-ui/react';
import React from 'react';
import Search from './Search';
import Sort from './Sort';

const Filters: React.FC = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Flex flexDirection="row" justifyContent="space-between">
                <Search />
                <Sort />
            </Flex>
        </form>
    );
};

export default Filters;
