import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from './screens/menu';
import FavoritesScreen from './screens/favorites';
import ShoppingListScreen from './screens/shoppingList';
import PantryScreen from './screens/pantry';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Malzemeler') {
            iconName = focused
              ? require('../assest/images/vegetable-color.png')
              : require('../assest/images/vegetable.png')
          } else if (route.name === 'Menü') {
            iconName = focused
              ? require('../assest/images/home-blue.png')
              : require('../assest/images/home2.png')
          } else if (route.name === 'Favoriler') {
            iconName = focused
              ? require('../assest/images/heart-red.png')
              : require('../assest/images/heart.png')
          } else if (route.name === 'Alışveriş Listesi') {
            iconName = focused
              ? require('../assest/images/cart-color.png')
              : require('../assest/images/cart.png')
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" size={size} color={color} />;
        },
      })}
      tabBarComponent='TabBarBottomKeyboardAware'
      initialRouteName="Menü"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 50,
          paddingBottom: 5,
        }
      }}
    >
      <Tab.Screen name="Malzemeler" component={PantryScreen}  />
      <Tab.Screen name="Menü" component={MenuScreen} />
      <Tab.Screen name="Favoriler" component={FavoritesScreen} />
      <Tab.Screen name="Alışveriş Listesi" component={ShoppingListScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}