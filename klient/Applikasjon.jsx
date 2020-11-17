import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import costumTheme from './src/stiler/tema';
import Ruter from './src/ruter/ruter.jsx';

const Applikasjon = () => (
    <ThemeProvider tema = { costumTheme }>
        <CSSReset />
        <Ruter />
    </ThemeProvider>
);

export default Applikasjon;