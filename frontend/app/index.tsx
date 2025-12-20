

import { Image, Text, TextInput, ScrollView, View } from 'react-native';

import Cats from './components/Cats';
import PizzaTranslator from './components/PizzaTranslator';
import ScrollTest from './components/Scrolltest';
import {usePrivy} from '@privy-io/expo';
import LoginScreen from './components/Login/LoginScreen';

export default function App() {
  const {isReady} = usePrivy();

  if(!isReady) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  }

  return (
<ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
      <Text>Welcome to Bubble App!</Text>
      <LoginScreen />
    </ScrollView>
  );
}