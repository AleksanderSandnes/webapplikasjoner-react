import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from 'styled-components';
import Navigasjon from '../komponenter/navigasjon';

const headerStil = styled.header`
    background: #fff;
    width: 100%;
    margin-bottom: 60px;
    box-shadow: 1px 1px 2px #f5f5f5;
`;

const hovedLayout = ({ children }) => (
    <Box>
        <headerStil>
            <Navigasjon />
        </headerStil>
        <Box w="100%" padding="0 20px" margin="0 auto">
            {children}
        </Box>
    </Box>
);

export default hovedLayout;