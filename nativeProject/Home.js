import React from 'react';
import ColorSheet from '../Component/ColorSheet';
import {useCallback, useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';

const Home = ({navigation, route}) => {
  const newPallete = route.params?.newplalette;
  const [palettes, setPalettes] = useState([]);
  const [isFeching, setIsFetching] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const newPalettes = await response.json();
      setPalettes(newPalettes);
    }
  }, []);

  const onRefreshing = useCallback(async () => {
    setIsFetching(true);
    await handleFetchPalettes();
    setIsFetching(false);
  }, []);

  useEffect(() => {
    handleFetchPalettes().catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (newPallete) {
      setPalettes(prevPalette => [newPallete, ...prevPalette]);
    }
  }, [newPallete]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddNewPalette');
        }}>
        <Text>Add New Color Plalette</Text>
      </TouchableOpacity>
      <FlatList
        data={palettes}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <ColorSheet
            handlePress={() => navigation.navigate('ColorPalette', item)}
            colorObject={item}
          />
        )}
        refreshing={isFeching}
        onRefresh={onRefreshing}
      />
    </View>
  );
};
export default Home;
