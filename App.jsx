
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Calculator from './lab2th/Calculator';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;