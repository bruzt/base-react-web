import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import MenuTop from '../components/MenuTop/MenuTop';
import MenuFixedTop from '../components/MenuTop/MenuFixedTop';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <Container>

            <Header />

            <MenuFixedTop />

            <MenuTop />

            <Main />

            <Footer />

        </Container>
  );
}

const Container = styled.div`
   
`;