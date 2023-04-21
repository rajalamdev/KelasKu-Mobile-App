import { useState } from "react"
import { Text, TextInput, View, Image, Modal, Pressable, Animated, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppContext } from "../context/AppContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const SetupPassword = ({navigation}) => {
  const [password, setPassword] = useState("");
  const context = useAppContext()
  const [error, setError] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingDecrement, setLoadingDecrement] = useState(new Animated.Value(100*2.5));  
    
  function nextHandler(){
    if (password === "") return setError(true)

    const registerUser = {
        username: context.tmp.username,
        name: context.tmp.name,
        email: context.tmp.email,
        password: password,
        subjects: []
    }

    successfullModal()

    context.setData(prev => [...prev, registerUser])
    context.setTmp({})
    setTimeout(() => {
        navigation.replace("Signin")
    }, 1000)
  }  

  function successfullModal(){
    setModalVisible(true)
    Animated.timing(loadingDecrement, {
        toValue: 0,
        duration: 5000,
    }).start();
    setTimeout(() => {
        setModalVisible(false)
    }, 4500)
  }

  return (
    <SafeAreaView className="h-full w-full bg-white">
        <TouchableOpacity className="scale-90" onPress={() => navigation.goBack(null)}>
            <Image source={require("../assets/back-button.png")} />
        </TouchableOpacity>
        <View className="w-72 mx-auto mt-16">
            <Text className="text-xl text-center">Set up password kamu</Text>        
            <TextInput value={password} onChangeText={value => {
                setPassword(value)
                if (value.length > 0){
                    setError(false)
                }
            }} className={`border-b mt-8 border-[#3C3C43] ${error ? "border-red-500" : "focus:border-black"} py-2`} placeholder={'********'}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'} />
            <TouchableOpacity className="bg-[#3DB2FF] px-9 rounded-full py-4 mt-8" onPress={nextHandler}>
                <Text className="text-center text-white font-medium">Lanjut</Text>
            </TouchableOpacity>
        </View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} className="w-3/4 relative bg-green-400/90 overflow-hidden">
            <Text style={styles.modalText} className="text-white font-medium">Berhasil mendaftarkan akun!</Text>
            <Pressable className="absolute top-2 right-3"
              onPress={() => setModalVisible(false)}>
              <Text className="text-base font-bold text-white">✕</Text>
            </Pressable>
            <Animated.View className={`h-1 bg-white absolute bottom-0 left-0 rounded-full`} style={{width: loadingDecrement}} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      alignItems: 'center',
      marginTop: 10,
    },
    modalView: {
      margin: 20,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },

    container: {
        height: 20,
        backgroundColor: '#ccc',
        borderRadius: 10,
        margin: 10,
      },
      bar: {
        height: 20,
        backgroundColor: '#333',
        borderRadius: 10,
      },
  });


export default SetupPassword