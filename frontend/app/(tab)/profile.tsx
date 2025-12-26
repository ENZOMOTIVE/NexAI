import { usePrivy } from "@privy-io/expo";
import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";

export default function Profile() {
  const { user, logout } = usePrivy();

  async function Logout() {
    try {
      await logout();
    } catch (e) {
      console.error('Logout failed', e);
    }
  }

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  const email = user?.linked_accounts.find(acc => acc.type === "email")?.address || "No email linked";
  const wallet_address= user?.linked_accounts.find(acc => acc.type === "wallet")?.address || "No wallet linked";
  const connected_chain = user?.linked_accounts.find(acc => acc.type === "wallet")?.chain_type || "No chain connected";


  return (
    <View style={{ flex: 1, padding: 20 }}>

      {/* --- Top (absolute fixed) --- */}
      <View
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <Avatar.Image
          size={100}
          source={{ uri: "https://avatars.githubusercontent.com/u/9919?v=4" }}
        />
      </View>

      {/* --- Middle (center content) --- */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 160,   // pushes below avatar
          paddingBottom: 100, // avoids overlap with button,
          width: '100%',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
          User Wallet Details
        </Text>

 
          <Card
    
    style={{
      width: "100%",
      marginTop: 12,
      marginBottom: 12,
      borderRadius: 12,
    }}
  > 
    <Card.Title
      title="Email"
      subtitle={email}
      left={(props) => (
        <Avatar.Icon
          {...props}
          icon="email"
        />
      )}
    />
  </Card>


   <Card
    
    style={{
      width: "100%",
      marginTop: 12,
      marginBottom: 12,
      borderRadius: 12,
    }}
  > 
    <Card.Title
      title="Wallet Address"
      subtitle={wallet_address}
      left={(props) => (
        <Avatar.Icon
          {...props}
          icon="wallet"
        />
      )}
    />
  </Card>


  <Card
    
    style={{
      width: "100%",
      marginTop: 12,
      marginBottom: 12,
      borderRadius: 12,
    }}
  > 
    <Card.Title
      title="Connected Blockchain "
      subtitle={connected_chain}
      left={(props) => (
        <Avatar.Icon
          {...props}
          icon="link"
        />
      )}
    />
  </Card>

   <Card
    
    style={{
      width: "100%",
      marginTop: 12,
      marginBottom: 12,
      borderRadius: 12,
    }}
  > 
    <Card.Title
      title="User DID"
      subtitle={user?.id}
      left={(props) => (
        <Avatar.Icon
          {...props}
          icon="human"
        />
      )}
    />
  </Card>











      </View>

      {/* --- Bottom (absolute fixed) --- */}
      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <Button
          mode="contained"
          icon="lock"
          buttonColor="red"
          onPress={Logout}
        >
          Logout
        </Button>
      </View>

    </View>
  );
}
