import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>

      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Got to Components Demo"
      />

      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
