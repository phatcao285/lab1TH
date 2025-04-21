import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { 
  Appbar, 
  Text, 
  Button, 
  Surface, 
  Provider as PaperProvider, 
  DefaultTheme,
  BottomNavigation
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196F3',
    accent: '#03DAC6',
  },
};

const Project4 = () => {
  const [pressCount, setPressCount] = useState(4);
  const [index, setIndex] = useState(1);

  const handlePress = () => {
    setPressCount(pressCount + 1);
  };

  // Routes for bottom navigation
  const [routes] = useState([
    { key: 'exercise', title: 'Exercise', focusedIcon: 'book' },
    { key: 'final', title: 'Final', focusedIcon: 'check-circle' },
    { key: 'extra', title: 'Extra 1', focusedIcon: 'plus-circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    exercise: () => <View style={styles.contentContainer} />,
    final: () => (
      <View style={styles.contentContainer}>
        <Surface style={styles.counterCard}>
          <Text style={styles.counterText}>
            You've pressed the button: {pressCount} time(s)
          </Text>
          <Button 
            mode="text" 
            onPress={handlePress} 
            color={theme.colors.primary}
            style={styles.button}
          >
            Press me
          </Button>
        </Surface>
      </View>
    ),
    extra: () => <View style={styles.contentContainer} />,
  });

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <View style={styles.tabContainer}>
            <Appbar.Content title="State & Props" titleStyle={styles.inactiveTab} />
            <Appbar.Content title="Instructions" titleStyle={styles.activeTab} />
          </View>
        </Appbar.Header>
        
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={styles.bottomNav}
          activeColor={theme.colors.primary}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeTab: {
    color: '#2196F3', 
    textAlign: 'center',
    fontSize: 14,
  },
  inactiveTab: {
    color: '#757575',
    textAlign: 'center',
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  counterCard: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 4,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    width: '90%',
  },
  counterText: {
    fontSize: 16,
    color: '#212121',
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  bottomNav: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  }
});

export default Project4;