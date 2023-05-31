import { StyleSheet, Text, View, Switch, Image, Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Markdown from 'react-native-easy-markdown';

const MaterialScreen = ({ navigation, route }) => {
  const material = route.params
  const materialContent = route.params.content

  return (
    <ScrollView className="px-4 pb-4 bg-white">
        <Markdown markdownStyles={{backgroundColor: "#fff"}}>
            {materialContent}
        </Markdown>

    </ScrollView>
  )
  }

export default MaterialScreen