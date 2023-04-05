import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LearningScreen from './screens/LearningScreen';
import SigninScreen from './screens/SigninScreen';
import Signup from './screens/SignupScreen';
import 'react-native-gesture-handler';
import { AppProvider } from './context/AppContext';
import TabNavigators from './navigators/TabNavigators';
import SearchDetailScreen from './screens/SearchDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          // gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          // animationEnabled: false
        }}>
          <Stack.Screen name="Signin" component={SigninScreen} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Signup" component={Signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Tab' component={TabNavigators} options={{
            headerShown: false
          }} />
          <Stack.Screen name='SearchDetail' component={SearchDetailScreen} options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            // animationEnabled: false
          }} />
          {/* <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false}} />
          <Stack.Screen name="Learning" component={LearningScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

