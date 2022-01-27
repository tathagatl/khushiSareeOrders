import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { BASE_STYLE, TITLE } from '../utils/constants';

const OrdersScreen = () => {
    return (
        <View style={BASE_STYLE}>
            <Text style={TITLE}>Orders</Text>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        tabBarIcon: ({ color, size }) => (
            <Icon name="ios-wine" color={color} size={size} />
        )
    }
}

export default OrdersScreen;