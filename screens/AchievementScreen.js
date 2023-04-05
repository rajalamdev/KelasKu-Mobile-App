import { SafeAreaView, View, Text } from 'react-native';
import { useAppContext } from '../context/AppContext';
// import Markdown from "react-native-marked";
import { StatusBar } from 'expo-status-bar';
import Markdown from 'react-native-easy-markdown';

const AchievementScreen = () => {
  const copy = `# h1 Heading 8-)

  **This is some bold text!**
  
  This is normal text
  `;
  
  // const {currentUser} = useAppContext()
  // console.log(currentUser)
  return (
    <SafeAreaView className="h-full bg-white">
    <StatusBar
        style='dark'
        backgroundColor="transparent"
        translucent={true}
      />
    <View className="pt-8 px-4 h-full bg-white">
      <Markdown markdownStyles	={{backgroundColor: "#fff"}}>
      {
          '# Why is markdown cool?\n\n' +

          '* because it lets us do simple formatting **easily** \n' +
          '* _without_ the need for complex CMS data structures \n' +
          '* and you can outsource ~~your~~ work to the content creators! \n\n' +

          '> This is a blockquote \n\n' +

          '![We can add images!](http://placehold.it/300x300) \n' +
          '[Or link to places](http://foobar.com) \n'
        }
      </Markdown>
    </View>
    </SafeAreaView>
  )
}

export default AchievementScreen