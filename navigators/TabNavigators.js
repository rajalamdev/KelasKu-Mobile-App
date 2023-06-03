import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import HomeScreen from '../screens/HomeScreen';
import LearningScreen from '../screens/LearningScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AchievementScreen from '../screens/AchievementScreen';
import SearchScreen from '../screens/SearchScreen'

import { Ionicons } from '@expo/vector-icons';
import SearchDetailScreen from '../screens/SearchDetailScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigators({ route }) {
  return (
    <Tab.Navigator screenOptions={({route}) => {
      return {
          tabBarStyle: {

          },
          tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === "Home"){
                  iconName = focused ? "ios-home" : "ios-home-outline"
              } else if(route.name === "Search" || route.name === "SearchDetail"){
                  iconName = focused ? "ios-search" : "ios-search-outline"
              } else if(route.name === "Achievement"){
                  iconName = focused ? "ios-star" : "ios-star-outline"
              } else if(route.name === "Profile"){
                  iconName = focused ? "ios-person" : "ios-person"
              }

              return <Ionicons name={iconName} color={color} size={size} />
          },
          tabBarActiveTintColor: "#3DB2FF",
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#43463F"
      }
  }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
          headerShown: false
        }} />
      <Tab.Screen name="Achievement" component={AchievementScreen} options={{
          headerShown: false
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: false
      }} />
      {/* <Tab.Screen name='SearchDetail' component={SearchDetailScreen} options={{
          tabBarButton: () => null,
          tabBarVisible: false,
      }} /> */}
    </Tab.Navigator>
  )
}
