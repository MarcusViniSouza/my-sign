import * as React from 'react';

import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Linking, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../../assets/logo.png';

export default function Home() {
  const git = 'https://github.com/MarcusViniSouza/my-sign';
  const linkedin = 'https://www.linkedin.com/in/marcus-vinicius-de-souza-a36832ab/';

  function openLink(link) {
    Linking.openURL(link);
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerHeader}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={logo} />
        </View>

        <Text style={styles.textTitle}>Bem Vindo ao My Sign!</Text>
      </View>

      <View style={styles.containerDados}>
        <View>
          <Text>Acesse!</Text>
          <TouchableOpacity style={styles.buttons} onPress={() => openLink(linkedin)}>
            <Icon name="linkedin" size={25} color="#FFF"/>
            <Text style={styles.textButtons}>Linkedln</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => openLink(git)}>
            <Icon name="github" size={25} color="#FFF"/>
            <Text style={styles.textButtons}>Github</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181F3D',
  },
  containerDados: {
    flex: 2,
    width: 400,
    top: -5,
    backgroundColor: '#FFF',
    borderTopEndRadius: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    backgroundColor: '#181F3D',
  },
  containerLogo: {
    height: 180,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  textTitle: {
    color: '#FFF',
    marginBottom: 20
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: '#FFF',
    borderWidth: 1,
  },

  textButtons: {
    color: '#FFF'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181F3D',
    width: 250,
    height: 45,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10
  }
});