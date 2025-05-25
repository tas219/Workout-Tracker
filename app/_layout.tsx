import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  return( 
    <Stack>
      <Stack.Screen name='index'/>
    </Stack>
  )
}

export default RootLayout