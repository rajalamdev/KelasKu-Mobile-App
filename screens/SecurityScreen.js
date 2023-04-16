import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const SecurityScreen = ({ navigation }) => {
  const { currentUser } = useAppContext()
  const [name, setName] = useState(currentUser.name)
  const [username, setUsername] = useState(currentUser.username)
  const [email, setEmail] = useState(currentUser.email)
  const [password, setPassword] = useState(currentUser.password)
  const [hidePassword, setHidePassword] = useState(true)
  // console.log(currentUser)
  return (
    <SafeAreaView className="h-full bg-white">
       <StatusBar
        style='light'
        backgroundColor="#3DB2FF"
        translucent={true}
      />
      <ScrollView>

        <ImageBackground className="relative" source={require("../assets/vector-security.png")} style={{width: "100%", height: 310}}>
          <View className="flex-row mt-4 w-full">
            <TouchableOpacity className="scale-90" onPress={() => navigation.goBack(null)}>
              <Image source={require("../assets/back-button.png")} />
            </TouchableOpacity>
            <Text className="text-white mt-5 text-base ml-[88] text-center font-bold">Privasi</Text>
          </View>
          <View className="flex items-center">
            <View>
              <Image source={require("../assets/default-pfp-2.png")} className="bg-white rounded-full" style={{width: 100, height: 100}} />
            </View>
            <View>
              <Text className="text-[#263238] text-base font-medium">{currentUser.name}</Text>
              <Text className="text-[#898989] text-center">bio</Text>
            </View>
          </View>
        </ImageBackground>
        <ScrollView className="px-8 w-full gap-8">
            <View>
                <Text>Nama</Text>
                <TextInput value={name} onChangeText={value => setName(value)} className="border-b border-[#E8E8E8] py-2 focus:border-black" />
            </View>
            <View>
                <Text>Username</Text>
                <TextInput value={username} onChangeText={value => setUsername(value)} className="border-b border-[#E8E8E8] py-2 focus:border-black" />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput value={email} onChangeText={value => setEmail(value)} className="border-b border-[#E8E8E8] py-2 focus:border-black" />
            </View>
            <View className="relative">
                <Text>Password</Text>
                <TextInput value={password} secureTextEntry={hidePassword} onChangeText={value => setPassword(value)} className="border-b border-[#E8E8E8] py-2 focus:border-black" />
                <TouchableOpacity className="absolute right-2 bottom-4 scale-[1.5]" onPress={() => setHidePassword(prev => !prev)}>
                    <Image source={require("../assets/password-hide.png")} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity className="px-4 py-3 bg-[#3DB2FF] w-32 rounded-full">
                <Text className="text-white font-medium text-center">Simpan</Text>
            </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SecurityScreen