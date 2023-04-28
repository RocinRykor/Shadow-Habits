import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

const backgroundColors = {
  black: {backgroundColor: '#090C08'},
  purple: {backgroundColor: '#474056'},
  grey: {backgroundColor: '#8A95A5'},
  green: {backgroundColor: '#B9C6AE'},
};

const shadowRunners = {
  decrypt: {runnerName: `Decrypt`},
  smokes: {runnerName: `Smokes`},
  krieger: {runnerName: `Krieger`},
  applejack: {runnerName: `Applejack`},
};
const Start = ({navigation}) => {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [runner, setRunner] = useState('');

  const {black, purple, grey, green} = backgroundColors;
  const {decrypt, smokes, krieger, applejack} = shadowRunners;

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
            <View>
              <Text style={styles.text}>Choose your Runner</Text>
              <View style={[styles.colorSelector]}>
                <TouchableOpacity
                    style={[
                      styles.colorOption,
                      black,
                      color === black.backgroundColor ?
                          styles.colorSelected :
                          {},
                    ]}
                    onPress={() => setRunner(decrypt.runnerName)}
                >
                  <Text style={styles.runnerText}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                      styles.colorOption,
                      purple,
                      color === purple.backgroundColor ?
                          styles.colorSelected :
                          {},
                    ]}
                    onPress={() => setRunner(smokes.runnerName)}
                >
                  <Text style={styles.runnerText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                      styles.colorOption,
                      grey,
                      color === grey.backgroundColor ?
                          styles.colorSelected :
                          {},
                    ]}
                    onPress={() => setRunner(krieger.runnerName)}
                >
                  <Text style={styles.runnerText}>K</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                      styles.colorOption,
                      green,
                      color === green.backgroundColor ?
                          styles.colorSelected :
                          {},
                    ]}
                    onPress={() => setRunner(applejack.runnerName)}
                >
                  <Text style={styles.runnerText}>A</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                title="Open Chore List"
                onPress={() =>
                    navigation.navigate('Chore List', {
                      name: name,
                      runner: runner,
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
    height: '44%',
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
    fontSize: 16,
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

  runnerText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    verticalAlign: 'middle',
  }
});

export default Start;
