import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyle from './GlobalStyle';

import Routes from './Routes';

export default function App() {

    const theme = useSelector( (state) => state.theme);
    
    return (
            <ThemeProvider theme={theme}>
                <>

                    <GlobalStyle />
                    
                    <Routes />

                </>
            </ThemeProvider>

    );
}