import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from "./redux/store";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header.component';
import AddItem from './components/add-item.component';
import ListItem from './components/list-item.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e7e3",
  },
  contentWrapper: {
    padding: 20,
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header title="Shoping List"/>
          <View style={styles.contentWrapper}>
            <AddItem/>
            <ListItem/>
          </View>
      </SafeAreaView>
    </Provider>
    
  );
}

export default App;