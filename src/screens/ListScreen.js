import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
const ListScreen = () => {

    const friends = [
        { key: '1', name: 'Friend #1' },
        { key: '2', name: 'Friend #2' },
        { key: '3', name: 'Friend #3' },
        { key: '4', name: 'Friend #4' },
        { key: '5', name: 'Friend #5' },
        { key: '6', name: 'Friend #6' },
        { key: '7', name: 'Friend #7' },
        { key: '8', name: 'Friend #8' },
    ]
    return (
        <FlatList
            horizontal ={false}
            showsHorizontalScrollIndicator = {false}
            keyExtractor={(friend) => friend.key}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:50,
        marginVertical: 50
    }
});

export default ListScreen