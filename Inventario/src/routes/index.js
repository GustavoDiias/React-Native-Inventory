import React from 'react';

import Login from '../pages/login';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const LoginPage = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            header: null,
        }),
    },
});

const DrawerNavigatorMenu = createDrawerNavigator(
    {
        Login: LoginPage,
    },
    {
        initialRouteName: 'Login',
    },
);

export default createAppContainer(DrawerNavigatorMenu);