import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>

      <Button
        title="Got to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />

      <Button
        title="Got to List Demo"
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Got to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Got to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title="Got to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title="Got to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
