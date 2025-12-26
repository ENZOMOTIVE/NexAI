import { usePrivy } from "@privy-io/expo";
import { router } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { Button, Divider, Menu } from "react-native-paper";


export default function Settings() {

const {user} = usePrivy();
console.log("User data in Profile tab:", user);

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

     

        <ScrollView style={{ flex: 1, padding: 20 }}>
             <Text style={{ fontSize: 24, marginBottom: 20 }}>User Information</Text>
            <View>
             
                <Text style={{ fontSize: 16 }}>  Profile Page </Text>

            </View>
           
            
           
        </ScrollView>

           </View>
    )
}