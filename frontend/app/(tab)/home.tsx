import { View, Text, Button } from 'react-native';
import { usePrivy } from '@privy-io/expo';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Link } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function HomeScreen() {      

    
    const theme = useTheme();

return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.secondary }} >

  <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Welcome to NexAI</Text>
       




      </View>
</View>
);
}