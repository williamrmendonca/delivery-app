import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Categories from './src/pages/Categories';
import Profile from './src/pages/Profile';
import Cart from './src/pages/Cart';
import Vegetables from './src/pages/Vegetables';
import VegetableCart from './src/pages/VegetableCart';
import Payment from './src/pages/Payment';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: 'rgba(248, 248, 248, 0.92)',
    borderTopColor: 'rgba(248, 248, 248, 0.92)',
    paddingBottom: 12,
  },
  tabStyle: {
    marginTop: 10,
  },
}

const TabNavScreen = () => {
  return (
    <TabNav.Navigator tabBarOptions={tabBarOptions} screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        switch (route.name) {
          case "Categories":
            iconName = 'grid';
            break;

          case "Cart":
            iconName = 'shopping-cart';
            break;

          case "Profile":
            iconName = 'user';
            break;

          default:
            iconName = "grid";
            break;
        }

        return (
          <View style={styles.container}>
            <Feather name={iconName} size={24} color={focused ? 'rgba(114, 3, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)'}/>
          </View>
        )
      },
    })}>
      <TabNav.Screen name="Categories" component={Categories}/>
      <TabNav.Screen name="Cart" component={Cart}/>
      <TabNav.Screen name="Profile" component={Profile}/>
      </TabNav.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="App" component={TabNavScreen}/>
        <AppStack.Screen name="Vegetables" component={Vegetables}/>
        <AppStack.Screen name="VegetableCart" component={VegetableCart}/>
        <AppStack.Screen name="Payment" component={Payment}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 32,
  }
})
  


