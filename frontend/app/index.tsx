

import { Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import { Image } from 'expo-image';


import { usePrivy } from '@privy-io/expo';


import { useState, useEffect } from 'react';
import PrivyUI_Login from './Screens/Login/LoginScreen';
import HomeScreen from './Screens/Home/home';
import LoginScreen from './Screens/Login/LoginScreen';


export default function App() {
  const { isReady, user} = usePrivy();

  const [Uiready, setUIReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        setUIReady(true);
      }, 2000);

      return () => clearTimeout(timer);



    }
  }, [isReady]);

  if (!isReady || !Uiready) {
    return (
     <ImageBackground
      source={require('../assets/images/sample.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
 <ActivityIndicator size="large" />
   
     
    </View>
    </ImageBackground>
    );
  }



return (
    <>

    {
      user ? <HomeScreen /> : <LoginScreen />
    }
   
    </>
  );
}