import * as React from 'react';
import { Text, View,Image,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
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
          if (route.name === 'Anasayfa') {
            iconName = focused
              ? require('../../assest/images/remove.png')
              : require('../../assest/images/user.png')
          } else if (route.name === 'Profil') {
            iconName = focused
              ? require('../../assest/images/remove.png')
              : require('../../assest/images/user.png')
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" size={size} color={color} />;
        },
      })}
      tabBarComponent='TabBarBottomKeyboardAware'
      initialRouteName="Profil"
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
      }}>
        <Tab.Screen name="Anasayfa" component={HomeScreen} />
        <Tab.Screen name="Profil" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}