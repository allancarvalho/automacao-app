/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default props => (
//   <Provider store={store}>
//     <AppWithNavigationState {...props} />
//   </Provider>
// );
export default Automacaoapp = (props) => {
  return (
    <View>
      <Button
        raised
        icon={{ name: 'home', size: 32 }}
        buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }}
        textStyle={{ textAlign: 'center' }}
        title={`Welcome to\nReact Native Elements`}
      />
    </View>
  );
}