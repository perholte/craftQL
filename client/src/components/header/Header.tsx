import React from 'react';
import logo from '../../beer-svgrepo-com.svg';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Header: React.FunctionComponent = () => {
    return (
        <Box>
            <Flex h={'6em'} justifyContent="space-between" py="1rem" bg="#556B2F" alignItems="center" px="5%">
                <img width="50px" height="50px" src={logo} alt="beer" />
                <Heading fontSize="1.5rem" w="7rem">
                    craftQL
                </Heading>
            </Flex>
        </Box>
    );
};

export default Header;
