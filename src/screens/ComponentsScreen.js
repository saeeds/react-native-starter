import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name ='My Name is saeed Alsharqawi';
    return (
        <View>
            <Text style={styles.textStyle} >Getting Strted with react Native</Text>
            <Text style={styles.subHeaderStyle}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subHeaderStyle:{
        fontSize:20
    }
});


export default ComponentsScreen;
