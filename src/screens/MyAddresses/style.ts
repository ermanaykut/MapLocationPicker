import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
  },
  countContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(155, 112, 9, .8)',
    padding: 10,
    right: 20,
    top: 20,
  },
  textColor: {
    color: 'white',
  },
  deleteAll: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'rgba(21, 130, 98, .8)',
    padding: 10,
  },
  markerView: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    padding: 10,
  },
});

export default styles;
