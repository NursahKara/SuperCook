import * as React from 'react';
import { Text, View,Image,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './screens/menu';
import FavoritesScreen from './screens/favorites';
import ShoppingListScreen from './screens/shoppingList';
import PantryScreen from './screens/pantry';
import BarcodeScannerScreen from './screens/borcodeScanner';
import Icon from 'react-native-vector-icons/FontAwesome';
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginLeft: 25, marginTop: '5%' }}>
        <View style={{ marginBottom: 10, flex: 3 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Menu')}>
            <View style={{ flex: 1 }}>
              <Image  source={require('../assest/images/home-blue.png')} style={{ width:25,height:25}}/>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Ana Sayfa</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, flex: 3 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('BarcodeScannerScreen')}>
            <View style={{ flex: 1 }}>
            <Image  source={require('../assest/images/qr-code.png')} style={{ width:25,height:25}}/>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Barkod Okut</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const StackMenu = createStackNavigator();
function MenuStack() {
  return (
    <StackMenu.Navigator initialRouteName="Menu">
      <StackMenu.Screen name="Menu" component={MenuScreen} options={navOptionHandler} />
      <StackMenu.Screen name="BarcodeScannerScreen" component={BarcodeScannerScreen} options={navOptionHandler} />
    </StackMenu.Navigator>
  )
}
const StackBarcode = createStackNavigator();
function BarcodeStack() {
  return (
    <StackBarcode.Navigator initialRouteName="BarcodeScannerScreen">
      <StackBarcode.Screen name="BarcodeScannerScreen" component={BarcodeScannerScreen} options={navOptionHandler}/>
    </StackBarcode.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})

function TabNavigator() {
  return (
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
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator(
) {
  return (
    <Drawer.Navigator initialRouteName="Menu" drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="BarcodeScannerScreen" component={BarcodeStack} />
    </Drawer.Navigator>
  )
}
const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
