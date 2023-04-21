import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';

const SearchScreen = ({ navigation }) => {
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  const context = useAppContext();

  const [subjects, setSubjects] = useState(context.subjects)
  const [search, setSearch] = useState("")
  const [notFound, setNotFound] = useState(false)

  function filterSubjects(value){
    setSearch(value)
    if(value == ""){
      return setSubjects(context.subjects)
    }
    
    const filteredSubjects = context.subjects.filter(subject => subject.name.includes(value))
    filteredSubjects.length == 0 ? setNotFound(true) : setNotFound(false)
    setSubjects(filteredSubjects)
  }
  
  return (
    <SafeAreaView className="bg-white h-full">
       <StatusBar
        style='light'
        backgroundColor="black"
        translucent={true}
      />
      <View className="relative w-full h-[152]">
        <ImageBackground source={require("../assets/banner.png")} style={{width: "100%", height: "100%"}}>
          <View className="mt-16 ml-8">
            <Text className="text-white text-xl font-semibold">Pelajaran apa</Text>
            <Text className="text-white">yang ingin anda pelajari?</Text>
          </View>
        </ImageBackground>
        <View className="flex-row w-80 justify-between items-center py-2 px-4 rounded-xl shadow bottom-5 mx-auto bg-white" style={{shadowColor: "#000", shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3}} >
          <TextInput 
            placeholder='Cari pelajaran...' value={search} 
            onChangeText={(value) => filterSubjects(value)}
            className="flex-1"
          />
          <Image className="scale-90" source={require("../assets/Search/search.png")} />
        </View>
      </View>
      <ScrollView className="mt-12">
        <View className="flex flex-row pb-6 flex-1 flex-wrap w-full px-4">
        {!subjects.length ? (
          <View className="mx-auto mt-16 w-[90%]">
            <Image source={require("../assets/Search/notfound.png")} />
            <Text className="text-[#212121] text-center mb-2 text-lg font-medium">{"Tidak ditemukan :("}</Text>
            <Text className="text-[#212121] text-center">maaf, pelajaran yang kamu cari tidak dapat ditemukan, mohon cari dengan kata kunci lain.</Text>
          </View>
        ) : (
          subjects.map((subject, i) => {
            return (
              <TouchableOpacity key={i} className="w-1/2 py-2 px-2" onPress={() => navigation.navigate("SearchDetail", subject)} >
                  <Image source={subject.image}  style={{width: "100%", height: 120, shadowColor: "#000"}} className="rounded-xl" />
                  <Text className="font-medium text-[#212121] pt-1 pl-1">{subject.name}</Text>
              </TouchableOpacity>
            )
          })
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen