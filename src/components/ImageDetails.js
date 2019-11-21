import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = (props) => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>{props.scoreForImage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageDetails;