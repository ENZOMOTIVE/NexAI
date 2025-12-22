


import { PrivyProvider } from '@privy-io/expo';
import { Slot, Stack } from 'expo-router';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { PrivyElements } from '@privy-io/expo/ui';





export default function Layout() {
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });



  return (

    <PrivyProvider
      appId={process.env.EXPO_PUBLIC_PRIVY_APP_ID || ''}
      clientId={process.env.EXPO_PUBLIC_PRIVY_CLIENT_ID}
      config={{
        embedded: {
          ethereum: {
            createOnLogin: 'users-without-wallets',
          },
        },
      }}
    >

        <Stack screenOptions={{ headerShown: false }} />
      <PrivyElements />
    </PrivyProvider>
  );
}