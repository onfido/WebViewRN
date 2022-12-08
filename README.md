# WebViewRN
A sample react-native app integration with Onfido’s [Web SDK](https://documentation.onfido.com/sdk/web/), using a webview component. 

## Summary

This app is a simple demonstration of the minimum configurations that are required to integrate with [onfido-sdk-ui](https://documentation.onfido.com/sdk/web/) using a react-native webview component. The example uses [Smart Capture Link](https://developers.onfido.com/guide/smart-capture-link) and/or a hosted version of the SDK. In either case, the same configuration should apply as it would with any other hosted onfido-sdk-ui. 

You can find more detailed documentation here:
- [React-native webview component](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md)

- [onfido-sdk-ui](https://documentation.onfido.com/sdk/web/)

- [Smart Capture Link](https://developers.onfido.com/guide/smart-capture-link)



## Permissions

### iOS

You will need to enable Camera, Mic, Photo Library and Location Access in your `info.plist` file: 

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

Below is the list of permissions you will need to add to the `AndroidManifest.xml` file: 

```AndroidManifest.xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```    

You will also need to add this prop to <application> tag:

```AndroidManifest.xml
android:usesCleartextTraffic="true"
```  
    
## Integration with Smart Capture Link

The easiest webview set up with no callback injection is to simply insert the Smart Capture Link to the workflow in the `source.uri` property:
	
```WebView set up
 <WebView 
          allowsInlineMediaPlayback={true} 
          source={{ uri: 'https://crowd-testing.eu.onfido.app/f/755350ab-4ed2-4e4f-8834-d57c98513658' }} //link to smart-capture-link workflow    
        />
```        

To inject `onComplete` or `onError` callbacks, you will need to inject javascript to set up events and then use `onMessage` to start listening for the events you have set up. The example below uses the SDK's `setOptions` property to inject javascript, which runs only once when the webview is loaded. When the SDK triggers `onComplete` or `onError`, the react-native webview sends a message to the app in order to execute the callback scripts: 

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
**Note**: `injectedJavaScript` takes its value as a string, therefore you will need to inject your javascript to string:
	 
```js
        const runFirst = `
      onfido.setOptions({onComplete: () => window.ReactNativeWebView.postMessage("onComplete"),onError: () => window.ReactNativeWebView.postMessage("onError")});
      true; // note: this is required, or you'll sometimes get silent failures
    `;
``` 


##  Integration with hosted SDK
	 
The example below bootstraps the SDK using the hosted version, configuring the steps without the workflow:
 
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
