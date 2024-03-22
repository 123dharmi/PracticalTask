import React, {useState, useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/LoginScreen'

const AuthStack=()=>{
  const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default AuthStack