import React, { Children } from 'react';
import { ImageBackground } from 'react-native';

import bgLogin from '../../assets/images/wallpaper.jpg';

import Styles from './styles';

export default function Wallpaper({ children }) {
    return (
        <ImageBackground style={Styles.pictured} source={bgLogin} >
            {children}
        </ImageBackground>
    )
}