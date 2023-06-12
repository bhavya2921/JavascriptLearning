import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function colors({text, hexCode}) {
  const myStyle = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, myStyle]}>
      <Text style={styles.text}>
        {text} : {hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
