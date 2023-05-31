import { StyleSheet, Text, View, Switch, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Markdown from 'react-native-easy-markdown';
import { useAppContext } from '../context/AppContext';

const MaterialScreen = ({ navigation, route }) => {
  const currentSubject = route.params[0]
  const materialContent = route.params[1]
  const context = useAppContext()
  // console.log(context.currentUser.subjects)

  function doneRead(){
    materialContent.progress = 100
    const total = currentSubject.material.reduce((acc, curVal) => acc + curVal.progress, 0)

    currentSubject.progress = total / currentSubject.material.length
    
    const exceptCurrentSubject = context.currentUser.subjects.filter(subject => subject.name != currentSubject.name)

    const filteredSubject = context.currentUser.subjects.findIndex(subject => subject.name == currentSubject.name)
    
    const updatedSubject = context.currentUser.subjects[filteredSubject] = {
      ...context.currentUser.subjects[filteredSubject],
      progress: currentSubject.progress
    }
    
    context.setCurrentUser((prev) => {
      return {...prev, subjects: [updatedSubject, ...exceptCurrentSubject]}
    })
  }
  
  return (
    <ScrollView className="px-4 pb-4 bg-white">
        <Markdown markdownStyles={{backgroundColor: "#fff"}}>
            {materialContent.content}
        </Markdown>
        <TouchableOpacity className="bg-[#3DB2FF] px-8 py-3 rounded-full items-center self-center mt-4 mb-6 flex-row" onPress={doneRead}>
            <Text className="text-white text-base font-semibold text-center mr-2">
                Selesai
            </Text>
            <Image source={require("../assets/button-next.png")}  />
        </TouchableOpacity>
    </ScrollView>
  )
  }

export default MaterialScreen