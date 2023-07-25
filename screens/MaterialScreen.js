import { StyleSheet, Text, View, Switch, Dimensions, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Markdown from 'react-native-easy-markdown';
import { useAppContext } from '../context/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const MaterialScreen = ({ navigation, route }) => {
  const currentSubject = route.params[0]
  const materialContent = route.params[1]
  const context = useAppContext()
  // console.log(context.currentUser.subjects)

  function doneRead(){
    materialContent.progress = 100
    const total = currentSubject.material.reduce((acc, curVal) => acc + curVal.progress, 0)

    currentSubject.progress = parseInt(total / currentSubject.material.length)
    
    const exceptCurrentSubject = context.currentUser.subjects.filter(subject => subject.name != currentSubject.name)

    const filteredSubject = context.currentUser.subjects.findIndex(subject => subject.name == currentSubject.name)
    
    const updatedSubject = context.currentUser.subjects[filteredSubject] = {
      ...context.currentUser.subjects[filteredSubject],
      progress: currentSubject.progress
    }
    
    context.setCurrentUser((prev) => {
      return {...prev, subjects: [updatedSubject, ...exceptCurrentSubject]}
    })

    navigation.goBack(null)
  }

  return (
    <SafeAreaView className="px-4 pb-4 bg-white h-full">
    <ScrollView>
        <Markdown markdownStyles={defaultStyles}>
            {materialContent.content}
        </Markdown>
        <TouchableOpacity className="bg-[#3DB2FF] px-8 py-3 rounded-full items-center self-center mt-4 mb-6 flex-row" onPress={doneRead}>
            <Text className="text-white text-base font-semibold text-center mr-2">
                Selesai
            </Text>
            <Image source={require("../assets/button-next.png")}  />
        </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  )
  }

  const defaultStyles = {
    block: {
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    blockQuote: {
        borderLeftWidth: 5,
        borderLeftColor: '#aaaaaa',
        backgroundColor: '#ccc',
        paddingLeft: 10
    },
    h1: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 8,
        fontWeight: "bold"
    },
    h2: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8
    },
    h3: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8
    },
    h4: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8
    },
    h5: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 6
    },
    h6: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 6
    },
    hr: {
        alignSelf: 'stretch',
        height: 1,
        backgroundColor: '#333333',
        marginVertical: 8,
    },
    code: {
        backgroundColor: '#333333',
        color: 'orange',
    },
    text: {
        alignSelf: 'flex-start',
    },
    strong: {
        fontWeight: 'bold',
    },
    em: {
        fontStyle: 'italic',
    },
    del: {
        textDecorationLine: 'line-through',
    },
    u: {
        textDecorationLine: 'underline',
    },
    linkWrapper: {
        alignSelf: 'flex-start',
    },
    link: {
        textDecorationLine: 'underline',
        alignSelf: 'flex-start'
    },
    list: {
        marginBottom: 20
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    listItemContent: {
        flexDirection: 'row',
        flexShrink: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    listItemBullet: {
        width: 4,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 2,
        marginRight: 10,
    },
    listItemNumber: {
        marginRight: 10
    },
    imageWrapper: {
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        marginRight: "auto",
        marginLeft: "auto",
        // maxWidth: 400,
        // maxHeight: 400,
        // minHeight: 200,
        // aspectRatio: 1 * 2.5
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: "contain",
        // minWidth: 200,
        // height: 200,
        transform: [
          {scale: .8}
        ]
    }
  };

export default MaterialScreen