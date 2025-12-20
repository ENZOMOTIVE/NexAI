import { TextInput, View, Text } from "react-native";
import React, { useState } from "react";



export default function PizzaTranslator() {
  const [text, setText] = useState('');
  return(

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput 
        style={{ height: 40, borderColor: 'gray',  marginTop: 20, paddingHorizontal: 10 }}
        placeholder="Translate English to Pizza"
        defaultValue={text}
        onChangeText={(newText) => setText(newText)}

        />

        <Text>
      {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  )  ;
}