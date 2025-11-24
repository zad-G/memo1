import { StatusBar } from 'expo-status-bar'
import {View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Hello from './src/components/Helo'

const  App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
     <Hello style={{ fontSize: 16 }}>World</Hello>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App
