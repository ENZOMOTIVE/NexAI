import { View, Text, Button } from 'react-native';
import { usePrivy } from '@privy-io/expo';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function HomeScreen() {      

    const {logout,user} = usePrivy();


    async function Logout(){
      try {
        await logout();
        console.log('User logged out successfully');
      } catch(e){
        console.error('Logout failed', e);
      }
    }

    useEffect(() => {
      if(!user){
        router.replace('/login')
      }
    }, [user]);
    
    
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Welcome to NexAI</Text>
        <Text>{JSON.stringify(user, null, 2)}</Text>
        <Button title="Logout" onPress={Logout} />
      </View>
</View>
);
}