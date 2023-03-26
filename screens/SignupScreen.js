import { StyleSheet, Text, View, Switch, Image, Button } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Signup = ({ navigation }) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme()

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-[#1F1F39]">
        <View className="w-72">
          <Text className="text-2xl text-[#43463F] font-bold">Daftar</Text>
          <Text className="text-base text-[#43463F]">Selamat datang! Silahkan daftar!</Text>
        </View>
        <Image source={require("../assets/avatar.png")} className="w-80 h-60" />
        <View className="gap-4">
          <TextInput className="border w-72 py-1 px-4 rounded-full border-[#C9C9C9] focus:border-[#333]" placeholder='Azura@gmail.com' />
          <TextInput className="border w-72 py-1 px-4 rounded-full border-[#C9C9C9] focus:border-[#333]" placeholder='********' secureTextEntry={true} />
        </View>
        <TouchableOpacity className="bg-[#3DB2FF] w-72 py-2 mt-4 px-4 rounded-full">
            <Text className="text-white text-base text-center">Daftar</Text>
        </TouchableOpacity>
        <View className="flex-row gap-1 mt-20">
          <Text className="text-[#43463F]">sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.replace("Signin")}>
            <Text className="text-[#3DB2FF]">Masuk</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
  }

export default Signup