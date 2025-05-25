import { Text, View } from "react-native";
import "../global.css"


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-quinary-light dark:bg-quinary-dark ">
      <Text className="text-3xl font-pbold text-primaryText-light dark:text-primaryText-dark" >
        Big Title
        </Text>
        <Text className="font-pregular">
          More text for checking out the fonts and why isnt it working
        </Text>
        {/* <p className="font-pextrabold">some text to make sure the fonts are working</p> */}
    </View>
  );
}
