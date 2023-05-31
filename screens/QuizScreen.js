import { StyleSheet, Text, View, Switch, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Markdown from 'react-native-easy-markdown';
import { useAppContext } from '../context/AppContext';

const QuizScreen = ({ navigation, route }) => {
  const currentSubject = route.params[0]
  
  const materialContent = route.params[1].content
  const context = useAppContext()

  function doneRead(){

  }
  
  return (
    <ScrollView className="px-4 pb-4 bg-white">
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo velit reiciendis tempora optio ipsa nobis accusamus nisi facere ut quisquam vitae dolorum ex quis esse sequi eum laboriosam, necessitatibus mollitia explicabo veniam nihil. Architecto, vel totam autem ullam distinctio dolorem dolor tenetur quos aspernatur voluptatum quo perspiciatis laudantium accusantium quas facere voluptatem eum libero ipsa tempora, ab saepe assumenda perferendis quidem mollitia! Quaerat unde laborum hic. Qui doloremque hic autem rerum expedita animi cum id dignissimos, minus inventore? Facere nulla, voluptate totam expedita labore earum id animi odio sequi autem iste blanditiis eos quidem veniam ad sit in maiores?</Text>
        <TouchableOpacity className="bg-[#3DB2FF] px-8 py-3 rounded-full items-center self-center mt-4 mb-6 flex-row" onPress={doneRead}>
            <Text className="text-white text-base font-semibold text-center mr-2">
                Selesai
            </Text>
            <Image source={require("../assets/button-next.png")}  />
        </TouchableOpacity>
    </ScrollView>
  )
  }

export default QuizScreen