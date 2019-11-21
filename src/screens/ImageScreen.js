import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";
const ImageScreen = () => {
    return (
        <View>
            <ImageDetails
                imageSource={require('../../assets/forest.jpg')}
                title="Forest"
                scoreForImage={9}
            />
            <ImageDetails
                 imageSource={require('../../assets/beach.jpg')} 
                 title="Beach" 
                 scoreForImage={9}
             />
            <ImageDetails 
                  imageSource={require('../../assets/mountain.jpg')} 
                  title="Mountain" 
                  scoreForImage={9}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen;