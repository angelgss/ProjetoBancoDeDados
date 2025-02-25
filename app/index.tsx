import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from "./StartScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import CadastroScreen from "./CadastroScreen";
import AgendaScreen from "./AgendaScreen";
import ProfileScreen from "./ProfileScreen";
import ProfissionalScreen from './Profissional';
import HomeProScreen from './HomeProScreen';
import SuaAgendaScreen from './SuaAgendaScreen';
;
import PagamentoScreen from './PagamentoScreen';
import RelatoriosScreen from './RelatoriosScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      <Stack.Screen name="AgendaScreen" component={AgendaScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfissionalScreen" component={ProfissionalScreen} />
      <Stack.Screen name="HomeProScreen" component={HomeProScreen} />
      <Stack.Screen name="SuaAgendaScreen" component={SuaAgendaScreen} />
      <Stack.Screen name="RelatoriosScreen" component={RelatoriosScreen} />
      <Stack.Screen name="PagamentoScreen" component={PagamentoScreen} />



    </Stack.Navigator>

  );
}