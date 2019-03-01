import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'

import Tabs from '../components/Tab1';

import {
    Image,
} from 'react-native'

const TabNavigator = createBottomTabNavigator({
    Test1: {
        screen: Tabs,
        navigationOptions: {
            tabBarLabel: 'Marica',
            tabBarIcon: <Image source={require('../descarga.jpg')} style={{resizeMode: 'cover', width: 24, height: 24,}} />
        },
    },

})

export default createAppContainer(TabNavigator)