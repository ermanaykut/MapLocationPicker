import {Text, Pressable, Alert} from 'react-native';
import React from 'react';
import {IMapFeature} from '../../interface';
import styles from './style';
import {getItem, setItem} from '../../../../mmkv';
import { IFeature } from '../../../AddAddressFromSearch/interface';

export default function MapFeature ({item}: {item: IFeature}) {
  const saveAddressToLocal = () => {
    let addresses: IFeature[] = getItem('addresses');
    if (addresses != undefined) {
      addresses.push(item);
    } else {
      addresses = [];
      addresses.push(item);
    }
    setItem('addresses', addresses);
    Alert.alert(
      'Succsess',
      'You can see it, your added address from My Addresses Screen',
    );
  };

  return (
    <Pressable style={styles.container} onPress={saveAddressToLocal}>
      <Text style={styles.title}>Add Selected Address</Text>
    </Pressable>
  );
}
