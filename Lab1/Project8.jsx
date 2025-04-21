import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Appbar, Text, TextInput, Divider, BottomNavigation } from 'react-native-paper';

const Project8 = () => {
  const names = [
    'Johan Renard',
    'Bram van Neef',
    'Kasper Klute', 
    'Mandy Marin',
    'Agus Nienhuia',
    'Carol Williams',
    'ليونارد', 
    'محمد أمير شوقي', 
    'Maurice Roulin',
    'Andrea Austin',
    'Marek Kubey',
    'Bernice Brown',
    'Jayden Anderson',
    'Najib Van Riet',
    'Heather Hudson',
    'Maria Wright',
    'Estefania Ringgaard'
  ];


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'exercise', title: 'Exercise', focusedIcon: 'dumbbell' },
    { key: 'total', title: 'Total', focusedIcon: 'calculator' },
    { key: 'extra', title: 'Extra 1', focusedIcon: 'plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    exercise: () => <View style={styles.contentContainer} />,
    total: () => <View style={styles.contentContainer} />,
    extra: () => <View style={styles.contentContainer} />,
  });

  const renderItem = ({ item }) => (
    <>
      <TextInput
        value={item}
        mode="outlined"
        style={styles.input}
        editable={false}
      />
      <Divider />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      

      <Appbar.Header style={styles.header}>
        <Appbar.BackAction color="#007AFF" />
        <Text style={styles.title}>Long Lists</Text>
        <Appbar.Action icon="information-outline" color="#007AFF" />
      </Appbar.Header>
      

      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />
      

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bottomNav}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#f5f5f5',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    marginVertical: 4,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  bottomNav: {
    backgroundColor: 'white',
  },
});

export default Project8;