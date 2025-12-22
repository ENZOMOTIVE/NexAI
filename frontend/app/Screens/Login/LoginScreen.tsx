import { useLogin } from '@privy-io/expo/ui';
import { usePrivy } from '@privy-io/expo';
import { Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import HomeScreen from '../Home/home';
import { Background } from '@react-navigation/elements';


export default function LoginScreen() {
  const { login } = useLogin();
  const { user } = usePrivy();



  if (user) return <HomeScreen />;

  return (



<ImageBackground
      source={require('@/assets/images/sample.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Centered Text */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: 'rgba(0,0,0,0.5)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 4,
            textAlign: 'center',
          }}
        >
          Welcome to NexAI
        </Text>
      </View>

      {/* Login Button at Bottom using absolute positioning */}
      <View
        style={{
          position: 'absolute',
          bottom: 60, // distance from bottom
          width: '100%',
          alignItems: 'center',
        }}
      >
           <View style={{ alignItems: 'center', padding: 10, borderRadius: 10, width: '100%' }}>


    

      <TouchableOpacity
        onPress={() => {
          login({
            loginMethods: ['email'],
            appearance: { logo: 'https://yourapp.com/logo.png' },
          });
        }}
        style={{
          width: '100%',
          backgroundColor: '#4c6ef5',
          paddingVertical: 15,
          borderRadius: 12,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Login
        </Text>
      </TouchableOpacity>


    </View>
      </View>
    </ImageBackground>
  );
}
