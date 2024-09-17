import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>App</Text>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default App