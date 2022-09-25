import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

export const AppState = ({children}: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
        {/* <FadeScreen/> */}
      </AppState>
    </NavigationContainer>
  )
}

export default App;
