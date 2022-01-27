import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OrdersScreen, { screenOptions as OrdersOptions } from '../screen/OrdersScreen';
import { WINE_RED } from '../utils/constants';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

    const tabOptions = {
        activeTintColor: WINE_RED,
        style: {
            borderTopColor: "transparent",
            borderTopWidth: 0,
            elevation: 0,
        },
        keyboardHidesTabBar: true
    }

    return (
        <Tab.Navigator tabBarOptions={tabOptions}>
            <Tab.Screen name="Orders" component={OrdersScreen} options={OrdersOptions} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;