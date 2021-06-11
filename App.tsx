import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AppProvider } from './src/hooks';
import SignIn from './src/pages/SignIn';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        
          <Routes />
        
      </AppProvider>
    </NavigationContainer>
  );
}


