import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Visitados from "./Visitados";
import Inicio from "./Inicial";

/*import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/

function InicioScreen({ navigation }) {
  return <Inicio></Inicio>;
}

function VisitadosScreen({ navigation }) {
  return <Visitados></Visitados>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Visitados" component={VisitadosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
