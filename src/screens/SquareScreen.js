import React, { useState } from 'react'
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, chnage) => {
        //color === 'red', 'green','blue'
        //chnage === +15, -15
        switch (color) {
            case 'red':
                red + chnage > 255 || red + chnage < 0 ? null : setRed(red + chnage);
                return;
            case 'green':
                green + chnage > 255 || green + chnage < 0 ? null : setGreen(green + chnage);
                return;
            case 'blue':
                blue + chnage > 255 || blue + chnage < 0 ? null : setBlue(blue + chnage);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;