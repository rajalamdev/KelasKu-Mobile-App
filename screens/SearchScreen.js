import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';

const SearchScreen = () => {
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="relative w-full h-[152]">
        <ImageBackground source={require("../assets/banner.png")} style={{width: "100%", height: "100%"}}>
          <View className="mt-16 ml-8">
            <Text className="text-white text-xl font-semibold">Pelajaran apa</Text>
            <Text className="text-white">yang ingin anda pelajari?</Text>
          </View>
        </ImageBackground>
        <TextInput placeholder='Cari pelajaran...' value='' className="w-80 py-2 px-4 rounded-xl shadow bottom-5 mx-auto bg-white" 
        style={{shadowColor: "#000", shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3}} />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen