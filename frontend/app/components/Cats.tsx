
import React from 'react';
import { Button, Text } from "react-native";
import { View } from 'react-native';
import { useState } from 'react';

type CatProps = {
    firstName: string;
    secondName: string;
    thirdName: string;  
}


function give_fullName(firstName: string, secondName: string, thirdName: string): string {
    return `${firstName} ${secondName} ${thirdName}`;
}

export default function Cats (props: CatProps) {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>

     
        <Button  onPress={() => {
            setIsHungry(false);
        }}
            disabled ={!isHungry}
            title={isHungry ? "I am Hungry" : "I am Full"}
         />
        <Text>
            Hello, I am {give_fullName(props.firstName, props.secondName, props.thirdName)}
        </Text>
           </View>
    )
}

