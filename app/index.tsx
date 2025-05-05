import { Text, View } from "react-native";
import "../global.css"

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl bg-quinary-light dark:bg-quinary-dark text-primaryText-light dark:text-primaryText-dark" >I changed something.</Text>
    </View>
  );
}
