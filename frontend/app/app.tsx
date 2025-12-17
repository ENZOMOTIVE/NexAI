

import { Image, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

export default function App() {
  return (
    <ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to NexAI</Text>
         <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />

        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginTop: 20, paddingHorizontal: 10 }}
          placeholder="Type inside here"

        />
      </ScrollView>
  );
}


