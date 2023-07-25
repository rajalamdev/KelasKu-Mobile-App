import { StyleSheet, Text, View, Switch, Image, Alert, Button, Dimensions, BackHandler, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Markdown from 'react-native-easy-markdown';
import { useAppContext } from '../context/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const QuizScreen = ({ navigation, route }) => {
  const currentSubject = route.params[0]
  const materialContent = route.params[1]
  const currentQuiz = route.params[2]
  const quizLength = materialContent.content.length
  const [selectAnswer, setSelectAnswer] = useState(null)
  const context = useAppContext()
  const [disableCheckAnswer, setDisableCheckAnswer] = useState(true)
  const [checkAnswer, setCheckAnswer] = useState(null)
  const [nextQuestionButton, setNextQuestionButton] = useState(false)
  const [message, setMessage] = useState("")
  const [disableSelectAnswer, setDisableSelectAnswer] = useState(false)
  const [result, setResult] = useState(1)

  useEffect(() => {
    materialContent.content[0].finish = true
    console.log(currentSubject)
  })

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Apakah anda yakin?', 'ingin keluar dari kuis?', [
        {
          text: 'Batal',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Ya', onPress: () => {
          navigation.goBack(null)
          materialContent.content.map(mat => {
            mat.finish = false
          })
          materialContent.content[0].finish = true
        }},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  function checkAnswerHandler(){    
    setDisableSelectAnswer(true)

    if(materialContent.content[currentQuiz].option[selectAnswer].theAnswerIsTrue){
      setCheckAnswer(true)
      setMessage("Jawaban Benar!")
      setResult(prev => prev + 1)
      currentSubject.result = result
    } else {
      // if (currentSubject.result = 0){
      //   currentSubject.result = 0
      // }
      setCheckAnswer(false)
      setMessage("Jawaban Salah!")
    }
    
    setNextQuestionButton(true)
  }

  function selectAnswerHandler(id, opt){
    setSelectAnswer(id)
    setDisableCheckAnswer(false)
    // setCurrentAnswer(opt.answer)
    // setCheckAnswer(opt.theAnswerIsTrue)
  }

  function nextQuestionHandler(){
    if (currentQuiz >= quizLength - 1){
      materialContent.progress = 100
      const total = currentSubject.material.reduce((acc, curVal) => acc + curVal.progress, 0)

      const exceptCurrentSubject = context.currentUser.subjects.filter(subject => subject.name != currentSubject.name)

      const filteredSubject = context.currentUser.subjects.findIndex(subject => subject.name == currentSubject.name)

      const updatedSubject = context.currentUser.subjects[filteredSubject] = {
        ...context.currentUser.subjects[filteredSubject],
        progress: parseInt(total / currentSubject.material.length)
      }

      materialContent.content.map(material => {
        material.finish = false
      })

      if (currentSubject.result == 0){
        currentSubject.result = 0
      }

      context.setCurrentUser((prev) => {
        return {...prev, subjects: [updatedSubject, ...exceptCurrentSubject]}
      })

      
      return navigation.goBack(null)
    }

    setSelectAnswer(null)
    setDisableCheckAnswer(true)
    setNextQuestionButton(false)
    setMessage("")
    setDisableCheckAnswer(true)
    setDisableSelectAnswer(false)
    navigation.navigate("Quiz", [currentSubject, materialContent, currentQuiz + 1])
    materialContent.content[currentQuiz + 1].finish = true
  }
  
  return (
    <SafeAreaView className="bg-white h-full relative flex">
          <View className="justify-center py-4 flex-row gap-1">
            {materialContent.content.map(bar => {
              return <View className={`${bar.finish ? "bg-[#3DB2FF]" : "bg-[#E5E5E5]"} w-12 h-3 rounded-full`}></View>
            })}
          </View>
          <View className="items-center px-4 py-16">
            <Markdown markdownStyles={defaultStyles}>
              {
                materialContent.content[currentQuiz]?.question
              }
            </Markdown>
          </View>
          <View className="flex-row gap-8 flex-wrap justify-center">
            {materialContent.content[currentQuiz]?.option.map((opt, i) => {
              return (
                <TouchableOpacity disabled={disableSelectAnswer} onPress={() => selectAnswerHandler(i, opt)} key={i} className={`${i === selectAnswer ? "bg-slate-800" : "bg-[#3DB2FF]"} ${i === selectAnswer ? "scale-95" : ""} 
                ${(nextQuestionButton && checkAnswer) && (i === selectAnswer) ? "bg-green-500" : ""}
                ${(nextQuestionButton && !checkAnswer) && (i === selectAnswer) ? "bg-red-500" : ""}
                 px-2 py-4 w-[35%] rounded-xl`}>
                  <Text className="text-white text-center text-base font-semibold">{opt.answer}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View className="mt-8 ml-8">
            <Text className={`${checkAnswer ? "text-green-500" : "text-red-500"} text-lg font-medium`}>{message}</Text>
          </View>
          <View className="absolute bottom-8 self-center"> 
            {nextQuestionButton ? (
              <TouchableOpacity className={`bg-[#3DB2FF] px-8 py-3 rounded-full items-center self-center mt-4 mb-6 flex-row`} onPress={nextQuestionHandler}>
                  <Text className="text-white text-base font-semibold text-center mr-2">
                      {currentQuiz >= quizLength - 1 ? "selesai": "lanjutkan"}
                  </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled={disableCheckAnswer} className={`${!disableCheckAnswer ? "bg-[#3DB2FF]" : "bg-gray-300"} px-8 py-3 rounded-full items-center self-center mt-4 mb-6 flex-row`} onPress={checkAnswerHandler}>
                <Text className="text-white text-base font-semibold text-center mr-2">
                    periksa
                </Text>
              </TouchableOpacity>  
            )}
          </View>
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
        fontSize: 20,
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

export default QuizScreen