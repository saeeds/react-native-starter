import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
    const name = 'My Name is saeed Alsharqawi';
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1 Screen</Text>
            <Text style={styles.textStyle}>Child #2 Screen</Text>
            <Text style={styles.textStyle}>Child #3 Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});


export default BoxScreen;
