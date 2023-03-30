import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {getAddressWithComplete} from '../../services/autoCompleteAddress';
import {IFeature} from './interface';
import Feature from './components/Feature';

export default function AddAddressFromSearch() {
  const [search, setSearch] = useState<string>('');
  const [features, setFeatures] = useState<IFeature[]>([]);
  
  useEffect(() => {
    autoComplete();
  }, [search]);

  const onSuccess = (value: any) => {
    setFeatures(() => {
      return value?.features?.map((x: any) => {
        return {
          ...x?.properties,
          location: {
            latitude: x?.geometry?.coordinates?.[1],
            longitude: x?.geometry?.coordinates?.[0],
          },
        };
      });
    });
  };

  const autoComplete = () => {
    getAddressWithComplete(search, onSuccess);
  };

  const renderFeature = ({item}: {item: IFeature}) => <Feature item={item} />;

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="search anything"
        style={styles.input}
      />
      <Text style={{marginLeft: 10}}>{features.length + ' result found'}</Text>
      <FlatList data={features} renderItem={renderFeature} />
    </View>
  );
}