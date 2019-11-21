import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        HI THERE
      </Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="GO to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go To Image Deom"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter Deom"
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go To Color Deom"
      />

      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Square Deom"
      />

      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go To Box Deom"
      />


      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;