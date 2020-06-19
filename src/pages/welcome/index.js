import * as React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../../assets/logo.png';

export default function Welcome({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerInfo}>

                <View style={styles.containerLogo}>
                 <Image style={styles.logo} source={logo} />
                </View>

                <Text style={styles.styleTextTitle}>Bem-Vindo ao My Sign!</Text>
                <Text style={styles.styleTextSubtitle}>Este app tem como finalidade de trazer um layout simples de login.</Text>

                <TouchableOpacity style={styles.styleButton} onPress={() => navigation.navigate('Sign')}>
                    <Text style={styles.styleTextWhriteButton}>Iniciar</Text>
                    <Icon name="chevron-right" size={18} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.containerFoother}>
                <Text style={styles.styleTextWhrite}>By Marcus Vinicius de Souza</Text>
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
    containerInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 280
    },
    containerFoother: {
        marginBottom: 10
    },
    containerLogo: {
        height: 180,
        width: 180,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    logo: {
        height: 150,
        width: 150,
    },

    styleTextTitle: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 10
    },
    styleTextSubtitle: {
        fontSize: 10,
        color: '#FFF',
        marginBottom: 10,
    },
    styleTextWhriteButton: {
        color: '#FFF',
        fontSize: 18
    },
    styleTextWhrite: {
        color: '#FFF',
        fontSize: 8
    },

    styleButton: {
        height: 50,
        width: 200,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#D92057',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});