import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Component/HomeScreen';
import {Text, View} from 'react-native';
import IconSelector, {ICON_TYPE} from './Component/common/IconSelect';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Component/Categories';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomTabBarIcon = ({focused, iconName, label}) => (
  <View style={{alignItems: 'center', flexDirection:'row' , justifyContent:'space-evenly',}}>
    <IconSelector
      type={ICON_TYPE.Ionicons}
      name={iconName}
      size={14}
      color={focused ? '#CF76DD' : 'black'}
    />
    {focused && <Text style={{color: '#CF76DD', fontSize: 14, marginHorizontal:5,}}>{label}</Text>}
  </View>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let label;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              label = 'Home';
              break;
            case 'Search':
              iconName = 'search-outline';
              label = 'Search';
              break;
            case 'Play':
              iconName = 'play-circle-outline';
              label = 'Play';
              break;
            case 'Profile':
              iconName = 'person-outline';
              label = 'Profile';
              break;
          }

          return (
            <CustomTabBarIcon
              focused={focused}
              iconName={iconName}
              label={label}
            />
          );
        },
        tabBarActiveTintColor: '#CF76DD',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 10,
          padding: 10,
          elevation: 5,
          height:60,
        },
        tabBarItemStyle: {
          padding: 8,
          borderRadius: 10,
          marginHorizontal: 15, 
        },
        tabBarActiveBackgroundColor: '#FFE7EA',
        headerShown: false,
        tabBarLabel: () => null,
      })}>
      {/* All tabs navigate to the same screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="Play"
        component={HomeScreen}
        options={{title: 'Play'}}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{title: 'Profile'}}
      />
      <Tab.Screen name="Categories" component={Categories} options={{
          tabBarButton: () => null,  
        }} />
    </Tab.Navigator>
  );
};

const MainScreen = () => (
  <BottomTabNavigator />
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false, 
    }}
  >
    <Drawer.Screen name="Main" component={MainScreen} options={{ title: 'Main' }} />
    <Drawer.Screen name="Categories" component={Categories} options={{ title: 'Categories' }} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
      {/* <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
