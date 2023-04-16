import { StyleSheet, Text, View, Switch, Image, Button } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Signup = ({ navigation }) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme()

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#1F1F39]">
        <StatusBar
          style='dark'
          backgroundColor="transparent"
          translucent={true}
        />
        <Image source={require("../assets/signup-banner.png")} style={{width: "100%", height: 550}} className="absolute -top-20" />
        <View className="mt-[470] w-72 mx-auto">
          <Text className="text-2xl">
            Buat profil kamu
            <Text className="font-bold"> sekarang!</Text>
          </Text>
          <Text className="text-[#989EA7] mt-6 text-base">
            Buat profil untuk menyimpan hasil pembelajaran kamu dan terus belajar dengan gratis!
          </Text>
          <View className="mt-16 flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.replace("Signin")}>
              <Text className="text-base text-[#3DB2FF]">Kembali</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#3DB2FF] px-9 rounded-full py-3" onPress={() => navigation.navigate("SetupName")}>
              <Text className="text-base text-white">Lanjut</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
  }

export default Signup