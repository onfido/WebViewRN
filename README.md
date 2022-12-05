# WebViewRN
A sample react-native app integrating with onfdio-sdk-ui using Web-view component. 

## Summary

This app is a simple guide demonstrating minimum configurations that are required to integrate with onfido-sdk-ui using a react-native webview component.
The example is using smart-capture-link and/or a hosted verison of the SDK. However the same configuration should apply if with any other hosted onfido-sdk-ui. 

Click through for more guide line on:
- [React-native web-view component](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md)

- [onfido-sdk-ui](https://documentation.onfido.com/sdk/web/)

- [Smart-capture-link](https://developers.onfido.com/guide/smart-capture-link)



## Permissions

### iOS

You will need to enable Camera, mic, Photo library and location Access in you info.plist file. 

```AndroidManifest.xml
    <key>NSCameraUsageDescription</key>
    <string>Camera Access</string>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>Location Access</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>Mic Access</string>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>Photo Library Access</string>
```    

### Android

Below is the list of permissons you will need to add to the AndroidManifest.xml file. 

```AndroidManifest.xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```    

Also add this prop to <application> tag

```AndroidManifest.xml
android:usesCleartextTraffic="true"
```  
    
## Integration with smart-capture-link

The simplest webview set up with no callback injection is just to insert the link to workflow smart-capture-link for `source.uri` property.
	
```WebView set up
 <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://crowd-testing.eu.onfido.app/f/755350ab-4ed2-4e4f-8834-d57c98513658' }} //link to smart-capture-link workflow    
        />
```        

For injecting onComplete or onError callbacks you will need to inject javascript to set up event and then using onMessage start listening the events you have set up. Example below used SDK's setOptions property to inject javascript which runs only once when the webview is loaded. when SDK triggers onComplete or onError, the react-native webview sends a message to the app in order to execute the the callback scripts. 

```WebView set up
 <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://crowd-testing.eu.onfido.app/f/755350ab-4ed2-4e4f-8834-d57c98513658' }} //link to smart-capture-link workflow
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
```        
Note: `injectedJavaScript` takes its value as string, therefore you will need to inject you javascript to string.
	 
```js
        const runFirst = `
      onfido.setOptions({onComplete: () => window.ReactNativeWebView.postMessage("onComplete"),onError: () => window.ReactNativeWebView.postMessage("onError")});
      true; // note: this is required, or you'll sometimes get silent failures
    `;
``` 


##  Integration with hosted SDK
	 
Example below bootsrapt the SDK using the hosted version and confuguring the steps without workflow.
 
```WebView set up
<WebView 
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://sdk.eu.onfido.app/frame' }} // the link to the hosted SDK
          injectedJavaScript={runFirst}
          useWebKit={true}
    />
```

```Injected js
const runFirst = `
    Onfido.init({containerEl: document.body,token:<SDK_TOKEN>,steps:['document','face']});document.querySelector("#spinner")?.remove();
    true; // note: this is required, or you'll sometimes get silent failures
  `;
```
