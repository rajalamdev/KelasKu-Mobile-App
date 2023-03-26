import { Text, View, Image, Button } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const SigninScreen = ({ navigation }) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const context = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [message, setMessage] = useState("")

  async function loginHandler(){
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
    setMessage("")
    context.setCurrentUser(findUser)
    navigation.navigate("Tab")
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
    <View className="flex-1 items-center justify-center dark:bg-[#1F1F39] dark:bg-white bg-white">
        <View className="w-72">
          <Text className="text-2xl text-[#43463F] font-bold">Masuk</Text>
          <Text className="text-base text-[#43463F]">Selamat datang! Silahkan masuk!</Text>
        </View>
        <Image source={require("../assets/avatar.png")} className="w-80 h-60" />
        <View className="gap-4">
          <TextInput className={`border w-72 py-1 px-4 rounded-full ${errorUsername ? "border-red-500" : "border-[#C9C9C9]"} `} 
            placeholder='Azura@gmail.com' 
            onChangeText={value => {
              setUsername(value)
              if (value.length > 0){
                setErrorUsername(false)
              }
            }} 
          />
          <TextInput className={`border w-72 py-1 px-4 rounded-full ${errorPassword ? "border-red-500" : "border-[#C9C9C9]"} `} 
          placeholder='********' 
          secureTextEntry={true} 
          onChangeText={value => {
            setPassword(value)
            if (value.length > 0){
              setErrorPassword(false)
            }
          }} />
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
    </View>
  )
  }

export default SigninScreen