
// this is the tab navigator

import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavContactsScreen from '../NavContactsScreen';
import NavMapsScreen from '../NavMapsScreen';
import NavMessageScreen from '../NavMessageScreen';
import NavSettingsScreen from '../NavSettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import NavHomeScreen from '../NavHomeScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45'
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
      
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
          }
        }}
        >
          {/* TAB FOR HOME SCREEN START*/}
          <Tab.Screen name='Home' component={NavHomeScreen} 
            options={{
              tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top: 10}}>
                  <Image 
                    source={require('../../../assets/icons/home.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                  <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Home</Text>
                </View>
              ),
            }}
          />
          {/* TAB FOR HOME SCREEN END*/}

          {/* TAB FOR CONTACTS SCREEN START*/}
          <Tab.Screen name='Contacts' component={NavContactsScreen} 
            options={{
              tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top: 10}}>
                  <Image 
                    source={require('../../../assets/icons/contacts.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                  <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Contacts</Text>
                </View>
              ),
            }}
          />
          {/* TAB FOR CONTACTS SCREEN END*/}

          {/* TAB FOR MESSAGES SCREEN START*/}
          <Tab.Screen name='Messages' component={NavMessageScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <Image 
                  source={require('../../../assets/icons/messages.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: '#fff'
                  }}
                />
              ),
              tabBarButton: (props) => (
                <CustomTabBarButton {...props} />
              )
            }}
          />
          {/* TAB FOR MESSAGES SCREEN END*/}

          {/* TAB FOR MAPS&HUB SCREEN START*/}
          <Tab.Screen name='Maps' component={NavMapsScreen} 
            options={{
              tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top: 10}}>
                  <Image 
                    source={require('../../../assets/icons/map.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                  <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Maps&Hub</Text>
                </View>
              ),
            }}
          />
          {/* TAB FOR MAPS&HUB SCREEN END*/}

          {/* TAB FOR ACCOUNT INFO SCREEN START*/}
          <Tab.Screen name='Settings' component={NavSettingsScreen} 
            options={{
              tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top: 10}}>
                  <Image 
                    source={require('../../../assets/icons/setting.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                  <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Account</Text>
                </View>
              ),
            }}
          />
          {/* TAB FOR ACCOUNT INFO SCREEN END*/}
      </Tab.Navigator>
      
      
      
  );
}


const styles = StyleSheet.create({
  shadow: {
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  }
});

export default Tabs;

// <View>
 // <Text style={{fontSize: 24, alignSelf: 'center'}}>Home</Text>
//</View>

// tabBarIconStyle: {
//   display: 'none'
// },