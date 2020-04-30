import React from 'react';

import logoImg from '../../assets/images/logo.png';

import Styles from './styles'
import { View, Image, Text } from 'react-native';

export default function Logo() {
    return (
        <View style={Styles.container}>
            <Image style={Styles.image} source={logoImg} />
            <Text style={Styles.text}>Inventario</Text>
        </View>
    )
}