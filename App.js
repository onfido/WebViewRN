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
  Text,
} from 'react-native';


import { WebView } from 'react-native-webview';

class App extends Component {
  
  render() {
     const runFirst = `
      document.body.style.backgroundColor = 'red';
      onfido.setOptions({onComplete: () => window.ReactNativeWebView.postMessage("onComplete"),onError: () => window.ReactNativeWebView.postMessage("onError")});
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    return (
      <SafeAreaView style={{ flex: 1 }}>  

         <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://crowd-testing.eu.onfido.app/f/f0d19ecd-c0c2-4790-a286-084571410e1c' }} 
          onMessage={(event) => {
            if(event.nativeEvent.data === 'onComplete'){
              alert("we have comepleted")
              //onComplete callback goes here
            } else if (event.nativeEvent.data === 'onError') {
              alert("we have an Error")
              //onError callback goes here
            } else {
              alert("Do nothing")
              //do something else
            }

          }}
          injectedJavaScript={runFirst}
        />
      </SafeAreaView>
    );
  }

  /******
   * 
   * Example usinf latest hosted SDK with standard step configs no workflow
   * Replace <SDK_TOKEN> with valid SDK token
   * 
   * render() {
   * 
    const runFirst = `
    document.body.style.backgroundColor = 'red';Onfido.init({containerEl: document.body,token:<SDK_TOKEN>});document.querySelector("#spinner")?.remove();
    true; // note: this is required, or you'll sometimes get silent failures
  `;

    return (
      <SafeAreaView style={{ flex: 1 }}>  
            <WebView 
                originWhitelist={['*']}
                allowsInlineMediaPlayback={true} 
                source={{ uri: 'https://sdk.eu.onfido.app/frame' }} 
                injectedJavaScript={runFirst}
                useWebKit={true}
            />
      </SafeAreaView>
    );
    }
  */
}

export default App;
