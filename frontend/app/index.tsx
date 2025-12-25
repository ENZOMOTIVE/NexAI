

import { Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import { usePrivy } from '@privy-io/expo';
import { useState, useEffect, use } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';


// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 4000,
  fade: true,
});

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { user, isReady } = usePrivy();
  const router= useRouter();

  //Delay Splash to wait for Privy to initialize

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync(); 

      if (user) {
        router.replace('/(tab)/home');
      }
      else{
        router.replace('/login');
      }
    }
  }, [isReady]);

if (!isReady) return null;


  
}