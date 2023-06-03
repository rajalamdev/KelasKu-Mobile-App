import { StyleSheet, Text, View, Switch, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { useColorScheme } from 'nativewind';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  const { currentUser } = useAppContext();
  const bottomSheetRef = useRef(null);

  // const [bottomSheetIndex, setBottomSheetIndex] = useState(0)

  const snapPoints = useMemo(() => ["68%", "100%"], []);
  const handleSheetChanges = useCallback((index) => {
    // setBottomSheetIndex(index);
  }, []);

  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme()
  return (
    <SafeAreaView className="flex-1 bg-[#3DB2FF]">
       <StatusBar
        style='light'
        backgroundColor="transparent"
        translucent={true}
      />
        <SafeAreaView className="w-full h-60 bg-[#3DB2FF] flex flex-row items-center">
          <View className="w-1/2 pl-8 pr-2">
            <Text className="text-xl text-white font-semibold mb-2">Hai, {currentUser.name}!</Text>
            <Text className="text-white">Pelajaran apa yang ingin anda pelajari?</Text>
          </View>
          <View className="w-1/2">
            <Image source={require("../assets/illustration-home.png")} className="w-full h-full" />
          </View>
        </SafeAreaView>
        <View className="flex-1 absolute left-0 right-0 bottom-0 top-0 w-full h-full">
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            >
            <Text className="text-lg text-center pt-2 pb-4 text-[#43463F] font-medium">Pelajaran yang sedang dipelajari</Text>
            <BottomSheetScrollView >
              {!currentUser?.subjects?.length ? (
                <Text className={`text-slate-500 mx-auto mt-44 transition-all border border-slate-500 border-dashed p-2`}>
                  {"Belum ada pelajaran yang dipelajari :("}
                </Text>
              ): (
                <View className="w-[90%] mx-auto">
                {currentUser?.subjects?.map((subject, i, arr) => {
                  return (
                      <TouchableOpacity onPress={() => navigation.navigate("Learning", subject)} key={i} className={`flex-1 mb-4  flex-row border border-[#CDCDCD] rounded-lg overflow-hidden`}>
                        <Image source={subject.image} className="w-1/2 h-28" style={{ alignSelf: 'center', resizeMode: 'cover' }} />
                        <View className="w-1/2 px-2 py-2 relative">
                          <Text className="font-medium text-[#43463F]">{subject.name}</Text>
                          <View className="flex flex-row items-center absolute bottom-3 left-2">
                            <View className="w-[130] h-[14] rounded-full overflow-hidden bg-[#E5E5E5]">
                              <View className={`bg-[#2FDB81] h-full`} style={{width: `${parseInt(subject.progress)}%`}}></View>
                            </View>
                            <Text className="ml-1 text-xs">{subject.progress}%</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                  )
                })}
                </View>
              )}
            </BottomSheetScrollView>
          </BottomSheet>
        </View>
    </SafeAreaView>
  )
}


export default HomeScreen