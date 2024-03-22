import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../pages/HomeTab';
import FavouriteTab from '../pages/FavouriteTab';
import {Images} from '../assets';

const DashboardStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel:'',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? Images.fillHome : Images.blankHome}
                style={{height: 25, width: 25}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FavouriteTab"
        component={FavouriteTab}
        options={{
          tabBarLabel:'',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? Images.fillFlow : Images.blankFlow}
                style={{height: 25, width: 25}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default DashboardStack;
