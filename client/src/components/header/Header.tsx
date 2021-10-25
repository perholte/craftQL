import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ReactComponent as Beer } from '../../beer.svg';

const Header: React.FunctionComponent = () => {
    return (
        <Box>
            <Flex h={'6em'} justifyContent="space-between" py="1rem" bg="#556B2F" alignItems="center" px="5%">
                <Beer />
                <Heading fontSize="1.5rem" w="7rem">
                    craftQL
                </Heading>
            </Flex>
        </Box>
    );
};

export default Header;
