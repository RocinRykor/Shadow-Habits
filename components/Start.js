import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

const Start = ({navigation}) => {

  const [name, setName] = useState('');

  return (
      <View style={{flex: 1}}>
        <ImageBackground
        source={require('../assets/cyberpunk-city.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Shadow Habits</Text>
        <View style={styles.box}>
          <TextInput
              style={[styles.input, styles.text]}
              onChangeText={setName}
              value={name}
              placeholder={'Please enter your name'}
          />
          <TouchableOpacity
              style={styles.button}
              title="Open Chore List"
              onPress={() =>
              navigation.navigate('Chore List', {
                name: name
              })
            }>
            <Text style={styles.buttonText}>Open Chore List</Text>
          </TouchableOpacity>
        </View>
          </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 600,
    color: '#FFFFFF',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2
    }
  },

  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    resizeMode: 'cover',
  },

  box: {
    backgroundColor: '#FFFFFF',
    width: '88%',
    height: '22%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    height: 50,
    width: '88%',
    borderColor: 'gray',
    borderWidth: 2,
    opacity: .5,
  },

  text: {
    color: '#757083',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
  },

  colorSelector: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  colorOption: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 40,
  },

  colorSelected: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#5f5f5f',
  },

  button: {
    height: 50,
    width: '88%',
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757083',
  },

  buttonText: {
    padding: 10,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});


export default Start;
