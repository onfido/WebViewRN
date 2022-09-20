/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
} from 'react-native';


import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://crowd-testing.eu.onfido.app/f/755350ab-4ed2-4e4f-8834-d57c98513658' }} 
        />
      </SafeAreaView>
    );
  }
}

export default App;
