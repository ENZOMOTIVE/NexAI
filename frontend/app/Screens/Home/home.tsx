import { View, Text, Button } from 'react-native';
import { usePrivy } from '@privy-io/expo';

export default function HomeScreen() {      

    const {logout} = usePrivy();
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Welcome</Text>
        <Button title="Logout" onPress={logout} />
      </View>
</View>
);
}