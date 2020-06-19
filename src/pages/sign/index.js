import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import TouchID from 'react-native-touch-id';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [viewPassword, setViewPassword] = React.useState(true);

    const optionFinger = {
        title: 'Autentificação',
        sensorDescription: 'Touch sensor',
        sensorErrorDescription: 'Erro na verificação!',
        cancelText: 'Cancelar'
    };

    async function handleAuthenticateFinger() {
        const hasFinger = await TouchID.isSupported();

        if (!hasFinger) return;

        TouchID.authenticate('Favor faça sua antentificação.', optionFinger).then(() => {
            handlerSign();
        }).catch(() => {
        });
    }

    function handlerSign() {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogin}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.instructions}>Favor preencha seu email e senha para prosseguir!</Text>

                <View style={styles.containerInput}>
                    <Icon style={styles.styleIcon} name="user" size={22} color="#FFF" />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#FFF"
                        placeholder="E-mail"
                        inlineImageLeft="username"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Icon style={styles.styleIcon} name="unlock-alt" size={22} color="#FFF" />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#FFF"
                        placeholder="Senha"
                        secureTextEntry={viewPassword}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
                        <Icon style={styles.styleIcon} name={viewPassword === false ? "eye" : "eye-slash"} size={22} color="#FFF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.styleButton} onPress={() => handlerSign()}>
                        <Text style={styles.styleTextButton}>Sign-In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.styleButtonFinger} onPress={() => handleAuthenticateFinger()}>
                        <Icon name="fingerprint" size={25} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerFoother}>
                <Text style={styles.styleText}>By Marcus Vinicius de Souza</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181F3D',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        width: 300
    },
    containerFoother: {
        marginBottom: 10
    },
    containerInput: {
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#232C51',
    },
    containerButtons: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    styleButtonFinger: {
        height: 50,
        width: 50,
        marginTop: 25,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#D92057',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleButton: {
        height: 50,
        width: 300,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#D92057',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 40,
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        color: '#FFF',
    },
    styleIcon: {
        padding: 10,
        marginLeft: 10,
    },
    styleTextButton: {
        color: '#FFF',
        fontSize: 18
    },
    styleText: {
        color: '#FFF',
        fontSize: 10
    },
    login: {
        fontSize: 25,
        margin: 2,
        marginBottom: 10,
        color: '#FFF'
    },
    instructions: {
        fontSize: 10,
        color: '#FFF',
        marginBottom: 10,
    },
});
