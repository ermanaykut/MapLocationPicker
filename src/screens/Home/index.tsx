import {Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation<any>();

  const navigateToMap = () => {
    navigation.navigate('AddAddressFromMap');
  };

  const navigateToSearch = () => {
    navigation.navigate('AddAddressFromSearch');
  };

  const navigateToMyAddresses = () => {
    navigation.navigate('MyAddresses');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={navigateToMap}>
        <Text>Haritaya Git</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={navigateToSearch}>
        <Text>Adres Ara</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={navigateToMyAddresses}>
        <Text>Adreslerim</Text>
      </Pressable>
    </SafeAreaView>
  );
}