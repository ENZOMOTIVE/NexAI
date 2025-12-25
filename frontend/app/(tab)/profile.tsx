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




  return (
    <View style={{ flex: 1, padding: 20 }}>

      {/* --- Top (absolute fixed) --- */}
      <View
        style={{
          position: "absolute",
          top: 50,
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
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          User Wallet Details
        </Text>

 

  {user?.linked_accounts?.map((acc, index) => (
  <Card
    key={index}
    style={{
      width: "100%",
      marginBottom: 12,
      borderRadius: 12,
    }}
  >
    <Card.Title
      title={acc.type === "email" ? "Email" : "Wallet"}
      subtitle={acc.address}
      left={(props) => (
        <Avatar.Icon
          {...props}
          icon={acc.type === "email" ? "email" : "wallet"}
        />
      )}
    />

    {/* Extra details only for wallets */}
    {acc.type === "wallet" && (
      <Card.Content>
        <Text>Chain: {acc.chain_type}</Text>
        <Text>Connector: {acc.connector_type}</Text>
      </Card.Content>
    )}
  </Card>
))}


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
