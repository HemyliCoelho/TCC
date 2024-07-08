import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../Screen/Home'
import Fav from '../Screen/Fav'
import Pesquisa from '../Screen/Pesquisa'
import Perfil from '../Screen/Perfil'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../Shared/Colors'
export default function TabNavigation() {

const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={(
      headerShown = false
    )}>
      <Tab.Screen 
    name="Home" 
    component={Home} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons 
          name={focused ? 'home' : 'home'} // Ícone diferente quando selecionado e não selecionado
          color={focused ? Colors.NAVBAR : 'grey'} // Cor diferente quando selecionado e não selecionado
          size={size} 
        />
      ),
      tabBarActiveTintColor: Colors.NAVBAR, // Cor do ícone quando selecionado
      headerShown: false,
    }} 
  />
  
<Tab.Screen 
    name="Pesquisa" 
    component={Pesquisa} 
    options={{
      tabBarLabel: 'Pesquisa',
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons 
          name={focused ? 'search' : 'search'} // Ícone diferente quando selecionado e não selecionado
          color={focused ? Colors.NAVBAR : 'grey'} // Cor diferente quando selecionado e não selecionado
          size={size} 
        />
      ),
      tabBarActiveTintColor: Colors.NAVBAR, // Cor do ícone quando selecionado
      headerShown: false,
    }} 
  />

<Tab.Screen 
    name="Fav" 
    component={Fav} 
    options={{
      tabBarLabel: 'Fav',
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons 
          name={focused ? 'heart' : 'heart'} // Ícone diferente quando selecionado e não selecionado
          color={focused ? Colors.NAVBAR : 'grey'} // Cor diferente quando selecionado e não selecionado
          size={size} 
        />
      ),
      tabBarActiveTintColor: Colors.NAVBAR, // Cor do ícone quando selecionado
      headerShown: false,
    }} 
  />
 <Tab.Screen 
  name="Perfil" 
  component={Perfil} 
  options={{
    tabBarLabel: 'Perfil',
    tabBarIcon: ({ focused, color, size }) => (
      <FontAwesome 
        name={focused ? 'user-circle-o' : 'user-circle-o'} // Ícone user-circle-o
        color={focused ?  Colors.NAVBAR: 'grey'} // Cor diferente quando selecionado e não selecionado
        size={size} 
      />
    ),
    tabBarActiveTintColor: Colors.NAVBAR, // Cor do ícone quando selecionado
    headerShown: false,
  }} 
/>
  </Tab.Navigator>
  )
}
