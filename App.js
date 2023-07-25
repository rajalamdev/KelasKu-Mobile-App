import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import LearningScreen from './screens/LearningScreen';
import SigninScreen from './screens/SigninScreen';
import Signup from './screens/SignupScreen';
import 'react-native-gesture-handler';
import { AppProvider } from './context/AppContext';
import TabNavigators from './navigators/TabNavigators';
import SearchDetailScreen from './screens/SearchDetailScreen';
import SecurityScreen from './screens/SecurityScreen';
import SetupNameScreen from './screens/SetupNameScreen';
import SetupEmail from './screens/SetupEmail';
import SetupUsername from './screens/SetupUsername';
import SetupPassword from './screens/SetupPassword'
import MaterialScreen from './screens/MaterialScreen';
import QuizScreen from './screens/QuizScreen';

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
          <Stack.Screen name="SetupName" component={SetupNameScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="SetupUsername" component={SetupUsername} options={{
            headerShown: false
          }} />
           <Stack.Screen name="SetupEmail" component={SetupEmail} options={{
            headerShown: false
          }} />
            <Stack.Screen name="SetupPassword" component={SetupPassword} options={{
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
          <Stack.Screen name='Learning' component={LearningScreen} options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            // animationEnabled: false
          }} />
          <Stack.Screen name='Security' component={SecurityScreen} options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            // animationEnabled: false
          }} />
          <Stack.Screen name='Material' component={MaterialScreen} options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            // animationEnabled: false
          }} />
           <Stack.Screen name='Quiz' component={QuizScreen} options={{
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

