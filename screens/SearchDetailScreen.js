import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View, Image, Alert, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

const SearchDetailScreen = ({ route, navigation }) => {
  const {image, name, progress} = route.params 
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingDecrement, setLoadingDecrement] = useState(new Animated.Value(100*2.5));  


  const context = useAppContext()
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  function addSubject(){
    //   context.currentUser.subjects = [route.params, ...context.currentUser.subjects]
    if(context.currentUser.subjects.some(subject => subject.name === name)){
        return console.log('y')
    }

    context.setCurrentUser((prev) => {
        successfullModal()
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
        <ImageBackground source={image} style={{width: "100%", height: 250}}>
            <View className="w-full h-full flex justify-end px-4 pb-8" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <TouchableOpacity className="absolute top-4 -left-2 scale-90" onPress={() => navigation.goBack(null)}>
                    <Image source={require("../assets/back-button.png")} />
                </TouchableOpacity>
                <Text className="font-bold text-2xl text-white">{name}</Text>
                <Text className="text-white text-base">turunan, integral, etc</Text>
            </View>
        </ImageBackground>
        <View className="px-4 py-4 flex relative">
            <Text className="text-xl font-bold mb-2 text-[#212121]">Deskripsi</Text>
            <Text className="text-[#6F6F6F]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ducimus, tempore delectus corporis nobis quidem quisquam consequatur illum. Nostrum, totam? Officiis nemo quod at numquam consectetur ducimus facere, reiciendis vel nostrum enim dolore cupiditate sed. Repellendus iusto quisquam, atque, laboriosam aperiam voluptatibus amet exercitationem inventore quas consequatur quos rem vitae, praesentium animi facere itaque debitis voluptas est natus libero nisi similique? Natus necessitatibus fuga deserunt repellendus a voluptatem, facere dolor officiis sequi et delectus, magni vitae. Soluta rem, iste vitae ut in delectus voluptate, dolor non magni earum nemo cum consectetur aliquid sit repellendus odit vel rerum saepe! Quod, placeat.</Text>
        </View>
        <TouchableOpacity className="bg-[#3DB2FF] px-12 py-3 rounded-full absolute bottom-8 self-center" onPress={addSubject}>
            <Text className="text-white text-base font-semibold text-center">
                {context.currentUser.subjects.some(subject => subject.name === name) ? "Lanjut Belajar" : "Belajar Sekarang"}
            </Text>
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