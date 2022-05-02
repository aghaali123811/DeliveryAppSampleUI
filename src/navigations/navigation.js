// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Explore from '../screens/Explore/Explore';
import Following from '../screens/Following/Following';
import Search from '../screens/Search/Seach';
import Cart from '../screens/Cart/Cart';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../common/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Address from '../screens/Address/Address';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Address" component={Address}  options={{headerShown:false}}/>
        <Stack.Screen name="Home"  options={{headerShown:false}}>
        {props => <BottomTabs {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function BottomTabs() {
    return (
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    style: { backgroundColor: 'white', height: 50, borderTopColor: 'grey', borderTopWidth: 0.7, },
                    activeTintColor: 'grey',
                    // showLabel: false
                }}
            >
                <Tab.Screen name="Home" component={Home}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome name="user-circle-o" size={22} color={Colors.black}  />
                        ),
                    }}
                />
                <Tab.Screen name="Explore" component={Explore}
                    options={{
                        tabBarLabel: 'Explore',
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (
                            <Entypo name="location-pin" size={22} color={Colors.black}  />
                        ),
                    }}
                />
                <Tab.Screen name="Following" component={Following}
                    options={{
                        tabBarLabel: 'Following',
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="hearto" size={22} color={Colors.black}  />
                        ),
                    }}
                />
                <Tab.Screen name="Search" component={Search}
                    options={{
                        tabBarLabel: 'Search',
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="search1" size={22} color={Colors.black}  />
                        ),
                    }}
                />

                <Tab.Screen name="Cart" component={Cart}
                    options={{
                        tabBarLabel: 'Cart',
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (
                            <SimpleLineIcons name="bag" size={22} color={Colors.black}  />
                        ),
                    }}
                />


            </Tab.Navigator>
        );
    }


export default Navigation;
