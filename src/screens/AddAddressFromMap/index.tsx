import {View, Text, Image, Pressable, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {MarkerPNG} from '../../assets';
import {getAddressFromPoint} from '../../services/latlngToAddress-service';
import type {LatLng} from 'react-native-maps';
import MapFeature from './components/MapFeature';
import {IFeature} from '../AddAddressFromSearch/interface';

export default function AddAddressFromMap() {
  const [region, setRegion] = useState<
    LatLng & {
      latitudeDelta: number;
      longitudeDelta: number;
    }
  >();
  const [iconSize, setIconSize] = useState<number>();
  const [inputsVisible, setInputsVisible] = useState<boolean>(false);
  const [item, setItem] = useState<IFeature>();
  const [addressDetail, setAddressDetail] = useState<string>('');
  const [addressTitle, setAddressTitle] = useState<string>('');
  const [housenumber, setHousenumber] = useState<string>('');
  const [floornumber, setFloornumber] = useState<string>('');
  const [flatnumber, setFlatnumber] = useState<string>('');
  const [address, setAddress] = useState<any>();
  const mapRef = useRef<MapView>(null);

  const onRegionChange = (value: any) => {
    setIconSize(50);
  };
  const onRegionChangeComplete = (value: any) => {
    if (!inputsVisible) {
      setIconSize(40);
      setRegion(value);
    }
  };

  useEffect(() => {
    if (region && address && addressDetail && addressTitle)
      setItem({
        county: address.county,
        label: addressDetail,
        name: addressTitle,
        region: address.city,
        location: {
          latitude: region.latitude,
          longitude: region.longitude,
        },
      });
  }, [
    region,
    addressTitle,
    addressDetail,
    housenumber,
    floornumber,
    flatnumber,
    address,
  ]);

  const onSuccess = (value: any) => {
    setAddressDetail(value?.features?.[0]?.properties?.label ?? '');
    setHousenumber(value?.features?.[0]?.properties?.housenumber ?? '');
    setAddress({
      county: value?.features?.[0]?.properties?.county,
      city: value?.features?.[0]?.properties?.region,
    });
    setInputsVisible(true);
  };

  const saveAddress = () => {
    getAddressFromPoint(
      region?.longitude ?? 0,
      region?.latitude ?? 0,
      onSuccess,
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        showsCompass
        onRegionChange={onRegionChange}
        onPress={() => setInputsVisible(false)}
        onRegionChangeComplete={onRegionChangeComplete}>
        {inputsVisible && (
          <Marker
            coordinate={{
              latitude: region?.latitude ?? 0,
              longitude: region?.longitude ?? 0,
            }}
          />
        )}
      </MapView>
      {!inputsVisible && (
        <>
          <View style={styles.marker}>
            <Image
              source={MarkerPNG}
              style={[styles.image, {width: iconSize, height: iconSize}]}
            />
          </View>
          <Pressable style={styles.button} onPress={saveAddress}>
            <Text>Adresi Kaydet</Text>
          </Pressable>
        </>
      )}
      {inputsVisible && (
        <View style={styles.inputsContainer}>
          <Text>{address?.county + ', ' + address?.city}</Text>
          <TextInput
            value={addressTitle}
            onChangeText={setAddressTitle}
            placeholder="Address Title"
            style={styles.input}
          />
          <TextInput
            value={addressDetail}
            onChangeText={setAddressDetail}
            placeholder="Address Detail"
            style={styles.input}
          />
          <View style={styles.row}>
            <TextInput
              value={housenumber}
              onChangeText={setHousenumber}
              placeholder="Housenumber"
              style={[styles.input, {width: '30%', marginHorizontal: 6}]}
            />
            <TextInput
              value={floornumber}
              onChangeText={setFloornumber}
              placeholder="Floor Number"
              style={[styles.input, {width: '30%', marginHorizontal: 6}]}
            />
            <TextInput
              value={flatnumber}
              onChangeText={setFlatnumber}
              placeholder="Flat Number"
              style={[styles.input, {width: '30%', marginHorizontal: 6}]}
            />
          </View>
          {item && <MapFeature item={item} />}
        </View>
      )}
    </View>
  );
}
