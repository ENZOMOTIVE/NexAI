

import { Image, Text, TextInput, ScrollView, View } from 'react-native';


import {usePrivy} from '@privy-io/expo';

import PrivyUI_LoginScreen from './PrivyUiLogin';


export default function App() {
  const {isReady} = usePrivy();

  if(!isReady) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  }

  return (
<View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', marginTop: 50  }} >
      <Text>Welcome to Bubble App!</Text>
      <PrivyUI_LoginScreen />
    </View>
  );
}