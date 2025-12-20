


import {PrivyProvider} from '@privy-io/expo';

import {Slot} from 'expo-router';


export default function Layout() {
  

  return (
    <PrivyProvider
      appId = { process.env.EXPO_PUBLIC_PRIVY_APP_ID || ''}
      clientId= {process.env.EXPO_PUBLIC_PRIVY_CLIENT_ID}
       config={{
        embedded: {
            ethereum: {
                createOnLogin: 'users-without-wallets',
            },
        },
    }}
    >
      <Slot />
    </PrivyProvider>
    );
}