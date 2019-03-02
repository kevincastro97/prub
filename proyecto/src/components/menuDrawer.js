import React from 'react'
import {
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation'

import Pantalla1 from './pantalla1';
import Pantalla2 from './pantalla2';
import Pantalla3 from './pantalla3';

import {
    Image,
} from 'react-native'

import CustomDrawerContentComponent from './custom-drawer';


const Pantalla1Navigator = createStackNavigator({
    Pantalla1: {
      screen: Pantalla1,
      navigationOptions: {
        title: 'Pantalla 1',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
  initialRouteName: 'Pantalla1',
  
  })

const Pantalla2Navigator = createStackNavigator({
    Pantalla2: {
      screen: Pantalla2,
      navigationOptions: {
        title: 'Pantalla 2',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    });

    const Pantalla3Navigator = createStackNavigator({
        Pantalla3: {
          screen: Pantalla3,
          navigationOptions: {
            title: 'Pantalla 3',
            headerStyle: {
              backgroundColor: '#193555',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
        },
        });
    

export default TestMenuDrawer = createDrawerNavigator({
    Pantallan1: {
        screen: Pantalla1Navigator,
        navigationOptions: {
            drawerLabel: 'Pantalla1',
            drawerIcon: <Image source={require('../image/buses.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    Pantalla2: {
        screen: Pantalla2Navigator,
        navigationOptions: {
            drawerLabel: 'Pantalla2',
            drawerIcon: <Image source={require('../image/buses.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    Pantallan3: {
        screen: Pantalla3Navigator,
        navigationOptions: {
            drawerLabel: 'Pantalla3',
            drawerIcon: <Image source={require('../image/buses.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    }
},{
    contentComponent: CustomDrawerContentComponent,
})
