/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {Onfido, SdkOptions} from './Onfido';

class App extends Component {
  render() {
    const token = "eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NjU1ODU3NDMsInBheWxvYWQiOnsiYXBwIjoiZDgzOWI1OWItYzZlNy00MDY0LWFlZGUtODg3MWRjZTNkNTEzIiwiY2xpZW50X3V1aWQiOiJjZTY5ZjE4Zi04MDA2LTQyM2QtYWZkYS1mY2FmZjBkZTIxNTQiLCJpc19zYW5kYm94IjpmYWxzZSwiaXNfdHJpYWwiOnRydWUsInJlZiI6Iio6Ly8qLyoiLCJzYXJkaW5lX3Nlc3Npb24iOiJjYTBhYWQ1ZC00YmNlLTRkYWUtYjBkYy04YmJjZTQzNjk2MjQifSwidXVpZCI6ImJxOVpsZi1uZGNCIiwiZW50ZXJwcmlzZV9mZWF0dXJlcyI6eyJjb2JyYW5kIjp0cnVlLCJsb2dvQ29icmFuZCI6dHJ1ZSwiaGlkZU9uZmlkb0xvZ28iOnRydWUsInVzZUN1c3RvbWl6ZWRBcGlSZXF1ZXN0cyI6dHJ1ZSwiZGlzYWJsZU1vYmlsZVNka0FuYWx5dGljcyI6dHJ1ZX0sInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGIAkIBd6WtM-P8iUuwjHGJKKFq3qUowxu6MEdk0NtGpldpB037z3aZsW9s0b9QCar4ugoTXzaWtQFkUm72bQcRL90PVuoCQgE5TxT0PvZzx5_8djMDg49I5UmjYD0TJES20UCo98Vl0MdDGN4piCuf-yp4ccyCLgZmFmNbnSGWaAXhlOnTdKaPAQ";

    const parameters: SdkOptions = {
      token: token,
      steps: ["welcome", "complete"]
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <Onfido region={'EU'}  parameters={parameters} onComplete={(e) => {
          alert(JSON.stringify(e))
        }}/>

      </SafeAreaView>
    );
  }
}

export default App;
