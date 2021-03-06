import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../assets/logo-200x100.jpg';

export default function Header(props) {

    return (
        <Container {...props}>

            <div id='header-content'>
                <Link to='/'>
                    <img src={logo} alt='Logo' />
                </Link>

                <ul>
                    <li>
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={40} title='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={40} title='Twitter' />
                        </a>
                    </li>
                </ul>
            </div>

        </Container>
    );
}

const Container = styled.header`    
    width: 100%;
    height: 100px;
    background: ${props => props.theme.secondary};

    #header-content {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a img {
        height: 100px;
        display: block;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
        margin: 0 20px 0 0;
    }

    ul li a {
        color: ${props => props.theme.text};
        text-decoration: none;
        padding: 25px 0;
    }

    @media (max-width: 320px) {
        
        ul li {
            margin: 0 10px 0 0;
        }
    }
`;
