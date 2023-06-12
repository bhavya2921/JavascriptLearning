import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';

const SelectColor = props => {
  return (
    <View>
      <View
        flexDirection="row"
        style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Text>{props.item.colorName}</Text>
        <Switch
          style={{alignSelf: 'flex-end'}}
          value={
            !!props.colorList.find(
              color => color.colorName === props.item.colorName,
            )
          }
          onValueChange={() => props.handleChange(props.item)}
        />
      </View>
      <View style={myStyle.horizontalLine} />
    </View>
  );
};

const myStyle = StyleSheet.create({
  horizontalLine: {
    height: 2,
    backgroundColor: 'grey',
    margin: 5,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default SelectColor;
