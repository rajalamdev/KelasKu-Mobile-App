import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const ProfileScreen = ({ navigation }) => {
  const { currentUser, setCurrentUser } = useAppContext()
  // console.log(currentUser)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar
        style='light'
        backgroundColor="#3DB2FF"
        translucent={true}
      />
      <ScrollView>

        <ImageBackground className="relative" source={require("../assets/vector-profile.png")} style={{width: "100%", height: 300}}>
          <View className="flex-row mt-4 w-full justify-between">
            <TouchableOpacity className="scale-90" onPress={() => navigation.goBack(null)}>
              <Image source={require("../assets/back-button.png")} />
            </TouchableOpacity>
            <Text className="text-white mt-5 text-base text-center font-bold">Profil Saya</Text>
            <TouchableOpacity className="scale-90">
              <Image source={require("../assets/opt-menu.png")} />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row gap-2 absolute top-[120] left-12">
            <View>
              <Image source={require("../assets/default-pfp-2.png")} className="bg-white rounded-full" style={{width: 100, height: 100}} />
            </View>
            <View>
              <Text className="pt-8 text-[#263238] text-base font-medium">{currentUser.name}</Text>
              <Text className="text-[#898989]">bio</Text>
            </View>
          </View>
        </ImageBackground>
        <View className="w-4/5 h-full mx-auto items-center -mt-10">
          <View className="bg-[#DADADA] w-full h-[2]"></View>
          <View className="flex flex-row space-x-4">
            <View className="px-2 py-2">
              <Text className="text-base text-center font-medium">2 Jam</Text>
              <Text className="text-center text-[#898989]">Total belajar</Text>
            </View>
            <View className="px-2 py-2">
              <Text className="text-base text-center font-medium">20</Text>
              <Text className="text-center text-[#898989]">Pencapaian</Text>
            </View>
            <View className="px-2 py-2">
              <Text className="text-base text-center font-medium">{currentUser?.subjects?.length}</Text>
              <Text className="text-center text-[#898989]">Pelajaran</Text>
            </View>
          </View>
          <View className="w-full border px-4 py-4 rounded-xl mt-8 border-[#DADADA]">
            <Text className="text-[#898A8D]">Dasbor</Text>
            <View className="space-y-4 mt-4">
              <TouchableOpacity className="flex-row justify-between items-center">
                <View className="flex-row gap-4 items-center">
                  <Image source={require("../assets/Profile/settings.png")} />
                  <Text>Pengaturan</Text>
                </View>
                <Image source={require("../assets/Profile/arrow-right.png")} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center">
                <View className="flex-row gap-4 items-center">
                  <Image source={require("../assets/Profile/achievements.png")} />
                  <Text>Pencapaian</Text>
                </View>
                <Image source={require("../assets/Profile/arrow-right.png")} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center" onPress={() => navigation.navigate("Security")}>
                <View className="flex-row gap-4 items-center">
                  <Image source={require("../assets/Profile/security.png")} />
                  <Text>Keamanan</Text>
                </View>
                <Image source={require("../assets/Profile/arrow-right.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full border px-4 py-4 rounded-xl mt-8 border-[#DADADA]">
            <Text className="text-[#898A8D]">Akun saya</Text>
            <View className="mt-4 space-y-4">
              <TouchableOpacity>
                <Text className="text-[#3E5FAF]">Ganti ke akun lain</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text className="text-[#FB6D64]">Keluar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className={`top-0 bottom-0 left-0 ${modalVisible ? "right-0" : ""} bg-black/50 absolute`}>

        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="absolute bottom-0 left-0 right-0 z-50">
          <View className="w-full pt-12 pb-8 rounded-t-3xl relative bg-white overflow-hidden">
            <Text className="text-black text-center font-bold text-xl">Keluar akun?</Text>
            <Text className="text-black text-center">apakah anda yakin ingin keluar dari akun ini?</Text>            
            <TouchableOpacity
              className="mx-auto bg-red-500 px-28 py-2 rounded-full mt-8"
              onPress={() => {
                setModalVisible(false)
                navigation.replace("Signin")
                setCurrentUser({})
              }}>
              <Text className="text-base font-medium text-white">Keluar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mx-auto px-28 py-2 rounded-full mt-2"
              onPress={() => setModalVisible(false)}>
              <Text className="text-base font-medium text-black">Batal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen