import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header.component';
import AddItem, {Item} from './components/add-item.component';

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
  const [shoppingList, setShoppingList] = useState<Item[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shoping List"/>
      <View style={styles.contentWrapper}>
        <AddItem/>
      </View>
    </SafeAreaView>
  );
}

export default App;