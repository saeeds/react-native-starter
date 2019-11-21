import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
    switch (action.colorTOChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
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
                onIncrease={() => dispatch({ colorTOChange: red, amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorTOChange: red, amount: -1 * COLOR_INCREMENT })}
                color="Red" />
            <ColorCounter
                onIncrease={() => dispatch({ colorTOChange: blue, amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorTOChange: blue, amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorTOChange: green, amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorTOChange: green, amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen2;