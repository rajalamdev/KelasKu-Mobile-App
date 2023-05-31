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
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false
          }} />
    </Tab.Navigator>
  )
}
