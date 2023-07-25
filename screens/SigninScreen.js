import { Text, View, Image } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const SigninScreen = ({ navigation }) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const context = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    setColorScheme("light")
  }, [])

  function loginHandler(){
    if(username == "" || password == "") { 
      setErrorUsername(true) 
      setErrorPassword(true)
      setMessage("Username atau password tidak boleh kosong!")
      return
    }

    const findUser = context.data.find(user => {
      return (user.username == username || user.email == username) && user.password == password
    })

    if(!findUser) {
      setErrorUsername(true)
      setErrorPassword(true)
      setMessage("Username atau password salah!")
      return
    }

    setErrorUsername(false)
    setErrorPassword(false)
    setUsername("")
    setPassword("")
    setMessage("")
    context.setCurrentUser(findUser)
    // context.setCurrentSubject(findUser.subjects)
    navigation.replace("Tab")
    // await SecureStore.setItemAsync("token", "dummytoken");
  }

  // async function getCookies(){
  //   let result = await SecureStore.getItemAsync("token");
  //   if (result) {
  //     console.log("🔐 Here's your value 🔐 \n" + result);
  //   } else {
  //     console.log(result);
  //   }
  // }

  // async function removeCookies(){
  //   SecureStore.deleteItemAsync("token")
  // }

  return (
    <SafeAreaView className="flex-1 items-center justify-center dark:bg-[#1F1F39] light:bg-white bg-white">
      <StatusBar
        style='dark'
        backgroundColor="transparent"
        translucent={true}
      />
        <View className="w-72">
          <Text className="text-2xl text-[#43463F] font-bold">Masuk</Text>
          <Text className="text-base text-[#43463F]">Selamat datang! Silahkan masuk!</Text>
        </View>
        <Image source={require("../assets/avatar.png")} className="w-80 h-60" />
        <View className="gap-4">
          <TextInput className={`border w-72 py-1 px-4 rounded-full border-[#C9C9C9] ${errorUsername ? "border-red-500" : "focus:border-[#333]"}`} 
            placeholder='Email atau username' 
            onChangeText={value => {
              setUsername(value)
              if (value.length > 0){
                setErrorUsername(false)
              }
            }} 
            autoCapitalize={'none'}
          />
          <TextInput className={`border w-72 py-1 px-4 rounded-full border-[#C9C9C9] ${errorPassword ? "border-red-500" : "focus:border-[#333]"} `} 
          placeholder='********' 
          secureTextEntry={true} 
          onChangeText={value => {
            setPassword(value)
            if (value.length > 0){
              setErrorPassword(false)
            }
          }}
          autoCapitalize={'none'}
          />
        </View>
        <Text className="text-red-500 text-xs mt-2 text-left">{message}</Text>
        <TouchableOpacity className="bg-[#3DB2FF] w-72 py-2 mt-4 px-4 rounded-full" onPress={loginHandler}>
            <Text className="text-white text-base text-center">Masuk</Text>
        </TouchableOpacity>
        <View className="flex-row gap-1 mt-20">
          <Text className="text-[#43463F]">belum punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.replace("Signup")}>
            <Text className="text-[#3DB2FF]">Daftar</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  ) 
  }

export default SigninScreen