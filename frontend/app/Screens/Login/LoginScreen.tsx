import { useLoginWithEmail, usePrivy } from '@privy-io/expo';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import HomeScreen from '../Home/home';

export default function LoginScreen() {
  const { sendCode, loginWithCode } = useLoginWithEmail();

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const {user, logout} = usePrivy();

  if (user) {
    return (
      <HomeScreen />
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Login</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        inputMode="email"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      {!codeSent ? (
        <Button
          title="Send Code"
          onPress={async () => {
            await sendCode({ email });
            setCodeSent(true);
          }}
        />
      ) : (
        <>
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Enter OTP"
            style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
          />

          <Button
            title="Login"
            onPress={() => loginWithCode({ code, email })}
          />
        </>
      )}
    </View>
  );
}
