import {Text, Pressable, Alert} from 'react-native';
import React from 'react';
import {IFeature} from '../../interface';
import styles from './style';
import {getItem, setItem} from '../../../../mmkv';

export default function Feature({item}: {item: IFeature}) {
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
    <Pressable style={styles.container} onLongPress={saveAddressToLocal}>
      <Text style={styles.title}>{item.county + ', ' + item.region}</Text>
      <Text style={styles.content}>{item.label}</Text>
    </Pressable>
  );
}
