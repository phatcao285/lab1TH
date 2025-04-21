import { StyleSheet, View , Text } from "react-native";

const Project1 =() =>{
    return(
        <View style={
            {
                width:100,
                height:100,
                backgroundColor:'aqua',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }>
            <Text style={{color:'#fff'}}>
                Hello World
            </Text>
        </View>
    );
}

export default Project1;