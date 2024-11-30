import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AgendaScreen from '@/app/AgendaScreen';
import CadastroScreen from '@/app/CadastroScreen';
import HomeScreen from '@/app/HomeScreen';
import LoginScreen from '@/app/LoginScreen';
import ProfileScreen from '@/app/ProfileScreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
