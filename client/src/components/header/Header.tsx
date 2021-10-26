import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ReactComponent as Beer } from '../../beer.svg';

const Header: React.FunctionComponent = () => {
    return (
        <Box>
            <Flex
                h={'6em'}
                justifyContent="space-between"
                py="1rem"
                bg="rgba(117,56,19,255)"
                alignItems="center"
                px="5%"
            >
                <Beer />
                <Heading fontSize="1.5rem" w="7rem" color="rgba(220,179,53,255)">
                    CraftQL
                </Heading>
            </Flex>
        </Box>
    );
};

export default Header;
