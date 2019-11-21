import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
    switch (action.type) {
        case 'chnage_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case 'chnage_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case 'chnage_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return;
    }
}

const SquareScreen2 = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const [red, green, blue] = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: chnage_red, payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: chnage_red, payload: -1 * COLOR_INCREMENT })}
                color="Red" />
            <ColorCounter
                onIncrease={() => dispatch({ type: chnage_blue, payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: chnage_blue, payload: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: chnage_green, payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: chnage_green, payload: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen2;