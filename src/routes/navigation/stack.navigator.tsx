import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../../pages/Dashboard";
import SignIn from "../../pages/SignIn";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,      
      
    }} initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator }