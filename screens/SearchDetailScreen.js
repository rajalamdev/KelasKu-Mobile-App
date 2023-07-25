import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View, Image, Alert, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import ProgressCircle from 'react-native-progress-circle'

const SearchDetailScreen = ({ route, navigation }) => {
  const currentSubject = route.params 
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingDecrement, setLoadingDecrement] = useState(new Animated.Value(100*2.5));  

  
  const context = useAppContext()
  const {currentUser} = useAppContext()
  let filteredCurrentSubject = currentUser.subjects.find(subject => subject.name == currentSubject.name)
  function addSubject(){
    //   context.currentUser.subjects = [route.params, ...context.currentUser.subjects]
    if(context.currentUser.subjects.some(subject => subject.name === currentSubject.name)){
        return navigation.navigate("Learning", currentSubject)
    }

    successfullModal()
    context.setCurrentUser((prev) => {
        return {...prev, subjects: [route.params, ...prev.subjects]}
    })  
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
    <SafeAreaView className="bg-white h-full relative flex">
         <StatusBar
            style='dark'
            backgroundColor="transparent"
            translucent={true}
        />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} className="w-3/4 relative bg-green-400/70 overflow-hidden">
            <Text style={styles.modalText} className="text-white font-medium">Berhasil menambahkan pelajaran!</Text>
            <Pressable className="absolute top-2 right-3"
              onPress={() => setModalVisible(false)}>
              <Text className="text-base font-bold text-white">✕</Text>
            </Pressable>
            <Animated.View className={`h-1 bg-white absolute bottom-0 left-0 rounded-full`} style={{width: loadingDecrement}} />
          </View>
        </View>
      </Modal>
        <ImageBackground source={currentSubject?.image} style={{width: "100%", height: 250}}>
            <View className="w-full h-full flex justify-end px-4 pb-8" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <TouchableOpacity className="absolute top-4 -left-2 scale-90" onPress={() => navigation.goBack(null)}>
                    <Image source={require("../assets/back-button.png")} />
                </TouchableOpacity>
                <Text className="font-bold text-2xl text-white">{currentSubject.name}</Text>
                <Text className="text-white text-base">{currentSubject.headline}</Text>
            </View>
        </ImageBackground>
        <View style={{width: "100%", height: 150}} className="px-2 flex-row justify-center divide-x divide-[#ddd] gap-2 py-4">
          <View className="gap-2 w-1/4 h-full">
            <Image source={require("../assets/people.png")} className="scale-50" style={{width: 90, height: "52%"}} />
            <Text className="text-center font-semibold text-md">120</Text>
          </View> 
          <View className="gap-2 w-1/4 h-full items-center">
            <ProgressCircle
                percent={filteredCurrentSubject?.progress ? filteredCurrentSubject.progress : 0}
                radius={35}
                borderWidth={8}
                color="#69B85E"
                shadowColor="#F2F2F7"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 14 }}>{filteredCurrentSubject?.name == currentSubject.name ? `${filteredCurrentSubject.progress}%` : "0%"}</Text>
            </ProgressCircle>
            <Text className="text-center font-semibold text-md">Progress</Text>
          </View>
          <View className="gap-2 w-1/4 h-full items-center">
            <Image source={require("../assets/love.png")} className="scale-75" style={{width: 75, height: "52%"}} />
            <Text className="text-center font-semibold text-md">Favorit</Text>
          </View>
          <View className="gap-2 h-full w-1/4 items-center">
            <View className="flex-row gap-2 pt-4 h-[52%]">
              <View className="w-[8] h-[8] rounded-full bg-black"></View>
              <View className="w-[8] h-[8] rounded-full bg-black"></View>
              <View className="w-[8] h-[8] rounded-full bg-black"></View>
            </View>
            <Text className="text-center content-end font-semibold text-md">Lainnya</Text>
          </View>
        </View>
        <View className="px-4 py-4 flex relative">
            <Text className="text-xl font-bold mb-2 text-[#212121]">Deskripsi</Text>
            <Text className="text-[#6F6F6F]">{currentSubject.desc}</Text>
        </View>
        <TouchableOpacity className="bg-[#3DB2FF] px-8 py-3 rounded-full absolute items-center bottom-8 self-center flex-row" onPress={addSubject}>
            <Text className="text-white text-base font-semibold text-center mr-2">
                {context.currentUser.subjects.some(subject => subject.name === currentSubject.name) ? "Lanjut Belajar" : "Belajar Sekarang"}
            </Text>
            <Image source={require("../assets/button-next.png")}  />
        </TouchableOpacity>
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

export default SearchDetailScreen