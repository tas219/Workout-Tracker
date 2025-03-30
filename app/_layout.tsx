import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return( 
    //header goes here
    <Slot/>
    //footer goes here
  )
}

export default RootLayout

const styles = StyleSheet.create({})