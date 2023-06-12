import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ColorSheet = props => {
  const {paletteName, colors} = props.colorObject;
  function setBackColor(hexCode) {
    return {backgroundColor: hexCode};
  }

  return (
    <TouchableOpacity onPress={props.handlePress}>
      <Text style={mystyle.text}>{paletteName}</Text>
      <FlatList
        data={colors.slice(0, 5)}
        horizontal={true}
        renderItem={({item}) => (
          <View
            style={[
              mystyle.box,
              setBackColor(item.hexCode),
              {width: 40, height: 40},
            ]}
          />
        )}
      />
    </TouchableOpacity>
  );
};

const mystyle = StyleSheet.create({
  box: {
    margin: 4,
  },
  text: {
    padding: 6,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ColorSheet;
