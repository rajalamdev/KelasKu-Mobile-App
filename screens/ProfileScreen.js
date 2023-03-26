import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';

const ProfileScreen = () => {
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  return (
    <SafeAreaView>
        <Text>Ini ProfileScreen</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen