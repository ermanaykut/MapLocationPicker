import {View, Text, Pressable, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './style';
import {IFeature} from '../AddAddressFromSearch/interface';
import {getItem, setItem} from '../../mmkv';

export default function MyAddresses() {
  const [markers, setMarkers] = useState<IFeature[]>([]);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    getAddresses();
  }, []);

  const getAddresses = () => {
    setMarkers(getItem('addresses'));
  };

  const deleteAllItem = () => {
    setMarkers([]);
    setItem('addresses', []);
  };

  const deleteConfirmation = (marker: IFeature) => {
    console.log(marker);

    Alert.alert(
      'WARNING!!',
      'Are you sure delete this marker from Locale Storage',
      [
        {text: 'No'},
        {text: "Yes, I'm sure.", onPress: () => deleteItem(marker)},
      ],
    );
  };

  const deleteItem = (marker: IFeature) => {
    const addresses: IFeature[] = getItem('addresses');
    const filteredAddresses = addresses.filter(
      x => x?.location?.latitude != marker?.location?.latitude,
    );
    setItem('addresses', filteredAddresses);
    setMarkers(filteredAddresses);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        showsCompass>
        {markers &&
          markers.map(x => {
            return (
              <Marker
                coordinate={{
                  latitude: x?.location?.latitude ?? 0,
                  longitude: x?.location?.longitude ?? 0,
                }}>
                <Callout tooltip onPress={() => deleteConfirmation(x)}>
                  <View style={styles.markerView}>
                    <Text style={{color: 'red'}}>
                      Title: <Text style={{color: 'black'}}> {x?.name}</Text>
                    </Text>
                    <Text style={{color: 'red'}}>
                      Description:
                      <Text style={{color: 'black'}}> {x?.label}</Text>
                    </Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
      </MapView>
      <View style={styles.countContainer}>
        <Text style={styles.textColor}>{'Total: ' + markers.length}</Text>
      </View>
      <Pressable style={styles.deleteAll} onPress={deleteAllItem}>
        <Text>Delete All</Text>
      </Pressable>
    </View>
  );
}
