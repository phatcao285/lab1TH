import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Project1 from './Lab1/Project1';
import Project2 from './Lab1/Project2';
import Project3 from './Lab1/Project3';
import Project4 from './Lab1/Project4';
import Project5 from './Lab1/Project5';
import Project6 from './Lab1/Project6';
import Project7 from './Lab1/Project7';
import Project8 from './Lab1/Project8';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    
    /* //<Project1/>
    // <Project2/>
    // <Project3/>
    //<Project4/>
    // <Project5/>
    // <Project6/> */
    
    <SafeAreaProvider>
      {/* <Project7/> */}
      <Project8/>
    </SafeAreaProvider>
  );
};

// Render the current screen



export default App;