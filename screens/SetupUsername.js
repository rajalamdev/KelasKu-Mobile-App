import { useState } from "react"
import { Text, TextInput, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppContext } from "../context/AppContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const SetupUsername = ({navigation}) => {
  const [username, setUsername] = useState("");
  const context = useAppContext()
  const [error, setError] = useState(false)
    
  function nextHandler(){
    if (username === "") return setError(true)

    context.setTmp({
        ...context.tmp,
        username: username        
    })

    navigation.navigate("SetupEmail")
    console.log(context.tmp)
  }  

  return (
    <SafeAreaView className="h-full w-full bg-white">
        <TouchableOpacity className="scale-90" onPress={() => navigation.goBack(null)}>
            <Image source={require("../assets/back-button.png")} />
        </TouchableOpacity>
        <View className="w-72 mx-auto mt-16">
            <Text className="text-xl text-center">Username?</Text>        
            <TextInput value={username} onChangeText={value => {
                setUsername(value)
                if (value.length > 0){
                    setError(false)
                }
            }} className={`border-b mt-8 border-[#3C3C43] ${error ? "border-red-500" : "focus:border-black"} py-2`} placeholder="EX: lenathea.lavia" autoCapitalize={'none'}
            autoCorrect={false} />
            <TouchableOpacity className="bg-[#3DB2FF] px-9 rounded-full py-4 mt-8" onPress={nextHandler}>
                <Text className="text-center text-white font-medium">Lanjut</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SetupUsername