import 'react-native-gesture-handler';
import React from 'react';
import Home from './Screens/Home';
import ColorPalette from './Screens/ColorPalette';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import AddNewPaletteModal from './Screens/AddNewPaletteModal';

const MainComponent = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({route}) => ({title: route.params?.paletteName})}
      />
    </MainStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainComponent}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
