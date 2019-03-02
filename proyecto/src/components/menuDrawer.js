import React from 'react'
import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation'

import Pantalla1 from './pantalla1'
import Pantalla2 from './pantalla2'
import Pantalla3 from './pantalla3'

import {
    Image,
} from 'react-native'

export default TestMenuDrawer = createDrawerNavigator({
    Pantallan1: {
        screen: Pantalla1,
        navigationOptions: {
            drawerLabel: 'Pantalla1',
            drawerIcon: <Image source={require('../image/buses.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    Pantallan2: {
        screen: Pantalla2,
        navigationOptions: {
            drawerLabel: 'Pantalla2',
            drawerIcon: <Image source={require('../image/buses.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    Pantallan3: {
        screen: Pantalla3,
        navigationOptions: {
            drawerLabel: 'Pantalla3',
            drawerIcon: <Image source={require('../image/buses.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
})
