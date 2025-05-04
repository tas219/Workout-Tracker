import { Text, View } from "react-native";
import "../global.css"

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl bg-bg4L dark:bg-bg4D text-text1L dark:text-text1D" >I changed something.</Text>
    </View>
  );
}
