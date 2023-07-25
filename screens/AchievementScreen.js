import { SafeAreaView, View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { useAppContext } from '../context/AppContext';
// import Markdown from "react-native-marked";
import { StatusBar } from 'expo-status-bar';
import ProgressCircle from 'react-native-progress-circle'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const AchievementScreen = () => {
  const achievementList = [
    {
        image: require('../assets/Achievements/studious.png'),
        headline: "Rajin",
        info: "Kamu telah menyelesaikan 10 pelajaran.",
        color: "#9BD2FC"
    },
    {
        image: require('../assets/Achievements/quickle.png'),
        headline: "Cepat",
        info: "Kamu telah menyelesaikan quiz kurang dari 5 menit.",
        color: "#F1C40F"
    },
    {
        image: require('../assets/Achievements/ambitious.png'),
        headline: "Ambisius",
        info: "Kamu telah mencapai 3 pencapaian.",
        color: "#16A085"
    },
    {
        image: require('../assets/Achievements/perfectionist.png'),
        headline: "Perfeksionis",
        info: "Kamu telah menyelesaikan 10 kuis dengan skor 100%.",
        color: "#2980B9"
    },
  ]

  return (
    <SafeAreaView className="h-full bg-white">
        <StatusBar
            style='dark'
            backgroundColor="transparent"
            translucent={true}
          />
        <ScrollView className="pt-8 px-4 h-full">
            <View className={`w-[90%] mx-auto px-6 py-4 flex-row my-4 items-center border rounded-sm`}>
                    <View className="w-[30%] -ml-2">
                        <ProgressCircle
                            percent={80}
                            radius={32}
                            borderWidth={8}
                            color="#69B85E"
                            shadowColor="#F2F2F7"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>80%</Text>
                        </ProgressCircle>
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-lg">Total Pencapaian: 4</Text>
                        <Text>Kerja bagus! Selesaikan pencapaian anda sekarang!</Text>
                    </View>
            </View>
            {achievementList.map(achievement => {
                return (
                    <View className={`w-[90%] mx-auto px-6 py-4 flex-row my-4 items-center rounded-lg`} style={{backgroundColor: achievement.color}}>
                        <View className="w-[30%] -ml-2">
                            <Image source={achievement.image} className="" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-white font-semibold text-base">{achievement.headline}</Text>
                            <Text className="text-white">{achievement.info}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    </SafeAreaView>
  )
}

export default AchievementScreen