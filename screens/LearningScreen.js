import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';

const LearningScreen = () => {
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  return (
    <SafeAreaView>
       <StatusBar
        style='dark'
        backgroundColor="transparent"
        translucent={true}
      />
        <ImageBackground source={require("../assets/banner.png")}>

        </ImageBackground>
    </SafeAreaView>
  )
}

export default LearningScreen