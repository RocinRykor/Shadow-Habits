// import the screens
import Start from './components/Start';
import ChoreList from './components/ChoreList'

// import react Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Create the navigator
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chore List"
          component={ChoreList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
