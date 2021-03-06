import React from 'react';
import styled from 'styled-components';

import ThemeSwitchButton from '../components/ThemeSwitchButton';
import Header from '../components/Header';
import MenuTop from '../components/MenuTop/MenuTop';
import MenuFixedTop from '../components/MenuTop/MenuFixedTop';
import MenuDropdownTop from '../components/MenuTop/MenuDropdownTop';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <Container>

            <ThemeSwitchButton />

            <Header />

            <MenuFixedTop className='menu-top' />
            <MenuTop className='menu-top' />
            <MenuDropdownTop />

            <Main />

            <Footer />

        </Container>
  );
}

const Container = styled.div`
   
   @media (max-width: 768px) {

        .menu-top {
            display: none;
        }
    }
`;