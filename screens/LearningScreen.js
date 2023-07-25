import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';

const LearningScreen = ({route, navigation}) => {
  const {currentUser} = useAppContext()
  const currentSubject = route.params

  function learning(materi){
    if (materi.name === "Kuis"){
      navigation.navigate("Quiz", [currentSubject, materi, 0])
    } else {
      navigation.navigate("Material", [currentSubject, materi])
    }
  }
  
  return (
    <ScrollView>
      <ImageBackground source={currentSubject?.image} style={{width: "100%", height: 250}}>
            <View className="w-full h-full flex justify-end px-4 pb-8" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <TouchableOpacity className="absolute top-4 -left-2 scale-90" onPress={() => navigation.goBack(null)}>
                    <Image source={require("../assets/back-button.png")} />
                </TouchableOpacity>
                <Text className="font-bold text-2xl text-white">{currentSubject.name}</Text>
                <Text className="text-white text-base">{currentSubject.headline}</Text>
            </View>
      </ImageBackground>
      <ScrollView className="w-[90%] mx-auto rounded">
        <Text className="text-base font-medium text-center pb-4 pt-4">{`Selamat belajar ${currentUser.name} :D`}</Text>
        {currentSubject.material.map((material, i) => {
          return (
            <TouchableOpacity onPress={() => learning(material)} style={{height: 90}} key={i} className={`mb-4 items-center flex-row border border-[#CDCDCD] rounded-lg overflow-hidden`}>
              <Image source={material.image} style={{width: 65, height: 70, marginLeft: 8}} className="rounded-xl" />
              <View className="w-full px-2 py-2 relative self-start h-full">
                <Text className="font-medium text-[#43463F] mt-1">{material.name}</Text>
                <View className="flex flex-row items-center absolute bottom-3 left-2">
                  <View className="w-[220] h-[14] rounded-full overflow-hidden bg-[#E5E5E5]">
                    <View className={`bg-[#2FDB81] h-full`} style={{width: `${material.progress}%`}}></View>
                  </View>
                  <Text className="ml-1 text-xs">{material.progress}%</Text>
                </View>
                <Text className="text-gray-500 text-sm">{i === currentSubject.material.length - 1 ? `${currentSubject.result} / ${currentSubject.material[currentSubject.material.length - 1].content.length}` : ""}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </ScrollView>
  )
}

export default LearningScreen