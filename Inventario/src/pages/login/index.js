import React from 'react';
import Styles from './styles'
import Wallpaper from '../../components/wallpaper'
import Logo from '../../components/logo';
import { View, Text, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import UserImage from '../../assets/images/username.png';
import PassImage from '../../assets/images/password.png';

function Login() {
    return (
        <Wallpaper
            children={
                <>
                    <Logo />

                    <View style={Styles.inputWrapper}>
                        <Image source={UserImage} style={Styles.inlineImg} />
                        <TextInput
                            style={Styles.input}
                            placeholder='Digite o Usuario'
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={Styles.inputWrapper}>
                        <Image source={PassImage} style={Styles.inlineImg} />
                        <TextInput
                            style={Styles.input}
                            placeholder='Digite a Senha'
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={Styles.container}>
                        <TouchableOpacity style={Styles.button}>
                            <Text style={Styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        />

    )
}

export default Login;