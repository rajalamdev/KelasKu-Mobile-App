import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useAppContext } from '../context/AppContext';
import Markdown from "react-native-marked";

const AchievementScreen = () => {
  const copy = `# h1 Heading 8-)

  **This is some bold text!**
  
  This is normal text
  `;
  
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
        <Markdown
      value={`![Image](https://plus.unsplash.com/premium_photo-1661606053042-4e60b54f568c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`}
    />
    </SafeAreaView>
  </>
  )
}

export default AchievementScreen