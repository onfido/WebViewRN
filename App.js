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
     const runFirstX = `
      document.body.style.backgroundColor = 'red';
      onfido.setOptions({onComplete: () => window.ReactNativeWebView.postMessage("onComplete"),onError: () => window.ReactNativeWebView.postMessage("onError")});
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    const runFirst = `
    document.body.style.backgroundColor = 'red';Onfido.init({containerEl: document.body,token: 'eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NjU0MTcwNTYsInBheWxvYWQiOnsiYXBwIjoiNWUzNTg2NDYtNmJkMi00MGNkLTkwODgtNDdlNWYzYjQ5YWYzIiwiY2xpZW50X3V1aWQiOiJjZTY5ZjE4Zi04MDA2LTQyM2QtYWZkYS1mY2FmZjBkZTIxNTQiLCJpc19zYW5kYm94IjpmYWxzZSwiaXNfdHJpYWwiOnRydWUsInJlZiI6Iio6Ly8qLyoiLCJzYXJkaW5lX3Nlc3Npb24iOiJiYzUwZjM0MS1jZjNhLTQ1MzktYTIxMC1kNzc0NmZhNmY3NjMifSwidXVpZCI6ImJxOVpsZi1uZGNCIiwiZW50ZXJwcmlzZV9mZWF0dXJlcyI6eyJjb2JyYW5kIjp0cnVlLCJsb2dvQ29icmFuZCI6dHJ1ZSwiaGlkZU9uZmlkb0xvZ28iOnRydWUsInVzZUN1c3RvbWl6ZWRBcGlSZXF1ZXN0cyI6dHJ1ZSwiZGlzYWJsZU1vYmlsZVNka0FuYWx5dGljcyI6dHJ1ZX0sInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGHAkIBBYnLyRD67lxC0Q30ZUGstOyRxvFtAi-hsFgmlulsbzDeKnvac-DeA7GKj3tK6AtGjyLvjvkGYi4jx_2D1is_M_YCQRWgPyoJBcH0xaJbyXZFnlPnd_TwH9TvPNMyWSN71uHPNHCafnnG12_JWvlN1umGiWJpJvdlajQnhl4zAprh9EjY'});document.querySelector("#spinner")?.remove();
    true; // note: this is required, or you'll sometimes get silent failures
  `;

  const uri = 'https://sdk.eu.onfido.app/frame';
    return (
      <SafeAreaView style={{ flex: 1 }}>  
          
       { <WebView 
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://sdk.eu.onfido.app/frame' }} 
          injectedJavaScript={runFirst}
          useWebKit={true}
    />
       /*
         <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://crowd-testing.eu.onfido.app/f/755350ab-4ed2-4e4f-8834-d57c98513658' }} 
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
        />*/}
      </SafeAreaView>
    );
  }
}

export default App;
