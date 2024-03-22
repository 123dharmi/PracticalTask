import {Provider} from 'react-redux';
import {store} from './src/Redux/store/store';
import Home from './src/pages/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './src/stacks/AuthStack';
import DashboardStack from './src/stacks/DashboardStack';
import LoginScreen from './src/pages/LoginScreen';
import placeReducer from './src/Redux/reducers/placeReducer';
import { createStore, combineReducers} from 'redux';
import FlashMessage from 'react-native-flash-message';

const Store = createStore(placeReducer);

export default function App() {
  const AppStack = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <AppStack.Screen
            name="DashboardStack"
            component={DashboardStack}
            options={{headerShown: false}}
          />
        </AppStack.Navigator>
        {/* <LoginScreen/> */}
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
}
