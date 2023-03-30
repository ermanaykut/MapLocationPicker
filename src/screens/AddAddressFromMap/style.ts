import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
  },
  marker: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'rgba(128, 200,34, .7)',
    bottom: 45,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  inputsContainer: {
    height: 600,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '97%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
});

export default styles;