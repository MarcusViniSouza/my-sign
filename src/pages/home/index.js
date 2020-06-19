import * as React from 'react';

import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
    const git = 'https://github.com/MarcusViniSouza';
    const linkedin = 'https://www.linkedin.com/in/marcus-vinicius-de-souza-a36832ab/';

    function openLink(link) {
        Linking.openURL(link);
    }
    return (
       <SafeAreaView style={styles.container}>
           <Text>Bem Vindo ao My Sign!</Text>

           <View style={styles.containerDados}>
             <View>

              <TouchableOpacity style={styles.buttons} onPress={() => openLink(linkedin)}>
                 <Icon name="linkedin" size={25} /> 
                <Text>Linkedln</Text>    
              </TouchableOpacity>   

              <TouchableOpacity style={styles.buttons} onPress={() => openLink(git)}>
                 <Icon name="github" size={25} /> 
                <Text>Github</Text>    
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
    },
    containerDados:{
      width: 300,
      height: 300,
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },

    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#d9d9d9',
      width: 250,
      height: 45,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      marginBottom: 10
    }
});