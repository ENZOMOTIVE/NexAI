import { useLogin } from '@privy-io/expo/ui';
import { usePrivy } from '@privy-io/expo';
import { Button, View, Text } from 'react-native';
import HomeScreen from './Screens/Home/home';


export default function PrivyUI_LoginScreen() {
  const { login } = useLogin();
  const { user } = usePrivy();


  if (user) return <HomeScreen />;

  return (
    <View style={{ padding: 20 }}>


      <Button
        title="Login"
        onPress={() => {
          login({
            loginMethods: ['email','google','github','linkedin','sms'],  // choose what you want
            appearance: {
              logo: 'https://yourapp.com/logo.png',
            }
          }).then((session) => {
            console.log("User logged in:", session.user);
          });
        }}
      />
    </View>
  );
}
