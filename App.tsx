import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading1}>Project 2</Text>
          <FlatCards />
          <ElevatedCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading1: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default App