import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  title: {
   justifyContent:'center',
   alignItems:'center',
  },
  content: {
    width: '70%',
    color: 'black',
    fontWeight: '300',
    fontVariant: ['small-caps'],
  },
});

export default styles;