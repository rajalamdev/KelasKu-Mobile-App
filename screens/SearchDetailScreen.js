import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';

const SearchDetailScreen = ({ route, navigation }) => {
  const {image, name, progress} = route.params 
  const context = useAppContext()
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  function addSubject(){
    //   context.currentUser.subjects = [route.params, ...context.currentUser.subjects]
    if(context.currentUser.subjects.some(subject => subject.name === name)){
        return console.log("ye")
    }

    context.setCurrentUser((prev) => {
        return {...prev, subjects: [route.params, ...prev.subjects]}
    })  
  }  

  return (
    <SafeAreaView className="bg-white h-full relative flex">
        <ImageBackground source={image} style={{width: "100%", height: 250}}>
            <View className="w-full h-full flex justify-end px-4 pb-8" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <Text className="font-bold text-2xl text-white">{name}</Text>
                <Text className="text-white text-base">turunan, integral, etc</Text>
            </View>
        </ImageBackground>
        <View className="px-4 py-4 flex relative">
            <Text className="text-xl font-bold mb-2">Deskripsi</Text>
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

export default SearchDetailScreen