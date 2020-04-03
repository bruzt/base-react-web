import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaPalette } from 'react-icons/fa';

import { setTheme } from '../redux/actions/themeActions';

export default function ThemeSwitchButton() {

    const dispatch = useDispatch();

    return (
        <Button type='button' onClick={() => dispatch(setTheme())}>
            <FaPalette size={20}  title='Tema' />
        </Button>
    );
}

const Button = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme.text};
    cursor: pointer;
    position: absolute;
    top: 115px;
    left: 15px;
`;
