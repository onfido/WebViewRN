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
    let token = "eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NjU0MTE1NjIsInBheWxvYWQiOnsiYXBwIjoiYjI4MDM3NTMtM2JjNi00YzkwLWIxMTAtOTNhZDIxMGVjZjI2IiwiY2xpZW50X3V1aWQiOiJhNjUyMmM0OS1iZjkzLTQ5ZjYtYjhmOS02ZDNmMGRiM2NkMDMiLCJpc19zYW5kYm94IjpmYWxzZSwiaXNfdHJpYWwiOnRydWUsInJlZiI6Iio6Ly8qLyoiLCJzYXJkaW5lX3Nlc3Npb24iOiIzMWY0ZGFkNS04ZTAwLTRhZDMtYWY0ZC02NjM2MTdkZjdkYTAifSwidXVpZCI6IlMzdXprVW9IbjhvIiwiZW50ZXJwcmlzZV9mZWF0dXJlcyI6eyJjb2JyYW5kIjp0cnVlLCJsb2dvQ29icmFuZCI6dHJ1ZSwidXNlVG9sbEZyZWUiOnRydWUsImhpZGVPbmZpZG9Mb2dvIjp0cnVlLCJ1c2VDdXN0b21pemVkQXBpUmVxdWVzdHMiOnRydWUsImRpc2FibGVNb2JpbGVTZGtBbmFseXRpY3MiOnRydWV9LCJ1cmxzIjp7ImRldGVjdF9kb2N1bWVudF91cmwiOiJodHRwczovL3Nkay5vbmZpZG8uY29tIiwic3luY191cmwiOiJodHRwczovL3N5bmMub25maWRvLmNvbSIsImhvc3RlZF9zZGtfdXJsIjoiaHR0cHM6Ly9pZC5vbmZpZG8uY29tIiwiYXV0aF91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwib25maWRvX2FwaV91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwidGVsZXBob255X3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20ifX0.MIGHAkFYrlLbjEFvfhghXdibssPKq_FRUbtBay10RCBbbszMTcqh4k0krRAA23QC7KP-o-LglgLKJv2g6xROaZxsnL2g0QJCAIntZsXiqnY59Nf9Ny8R38i-3e2amHr3uGImTsAfeoDyTaio9ZEG6gfuETYtBGJFnXErdOME0vT3sAFwxzXNfaGi";

     const runFirstX = `
      document.body.style.backgroundColor = 'red';
      onfido.setOptions({onComplete: () => window.ReactNativeWebView.postMessage("onComplete"),onError: () => window.ReactNativeWebView.postMessage("onError")});
      true; // note: this is required, or you'll sometimes get silent failures
    `;
   const runFirst = `
      document.body.style.backgroundColor = 'red';
      alert('o Hi!');
      alert('afterrs');
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <SafeAreaView style={{ flex: 1 }}>
      
      
        <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://sdk.eu.onfido.app/frame' }} 
          injectedJavaScript={runFirst}
    />
       {/*
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
