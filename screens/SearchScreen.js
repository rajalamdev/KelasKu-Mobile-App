import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';

const SearchScreen = ({ navigation }) => {
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  const context = useAppContext();

  const [subjects, setSubjects] = useState(context.subjects)
  const [search, setSearch] = useState("")

  function filterSubjects(value){
    setSearch(value)
    if(value == ""){
      return setSubjects(context.subjects)
    }
    
    const filteredSubjects = context.subjects.filter(subject => subject.name.includes(value))
    setSubjects(filteredSubjects)
  }
  
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="relative w-full h-[152]">
        <ImageBackground source={require("../assets/banner.png")} style={{width: "100%", height: "100%"}}>
          <View className="mt-16 ml-8">
            <Text className="text-white text-xl font-semibold">Pelajaran apa</Text>
            <Text className="text-white">yang ingin anda pelajari?</Text>
          </View>
        </ImageBackground>
        <TextInput 
        placeholder='Cari pelajaran...' value={search} 
        className="w-80 py-2 px-4 rounded-xl shadow bottom-5 mx-auto bg-white" 
        style={{shadowColor: "#000", shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3}} 
        onChangeText={(value) => filterSubjects(value)}
        />
      </View>
      <ScrollView className="mt-12">
        <View className="flex flex-row pb-6 flex-1 flex-wrap w-full px-4">
        {subjects.map((subject, i) => {
          return (
            <TouchableOpacity key={i} className="w-1/2 py-2 px-2" onPress={() => navigation.navigate("SearchDetail", subject)} >
                <Image source={subject.image} style={{width: "100%", height: 120}} className="rounded-xl" />
                <Text className="font-medium pt-1 pl-1">{subject.name}</Text>
            </TouchableOpacity>
          )
        })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen