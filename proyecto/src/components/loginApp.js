import React from 'react';
import{
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet
} from 'react-native'

const LoginApp = (props) => {

    const {
        miOnChangeDeUSuario,
        miOnChangeDePassword,
        miOnPressDeIniciarSesion,
        nombreUsuario,
        contrasenaUsuario,
    } = props;

    return (
     <View style={styles.fon}>
        <View style={styles.fondo}>
            <Text style={styles.text1}>
                Usuario
            </Text>
            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDeUSuario}
                    value={nombreUsuario}
                />
            </View>

            <Text style={styles.text1}>
                Contraseña
            </Text>

            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDePassword}
                    value={contrasenaUsuario}
                />
            </View>
            <View style = {styles.margin}>
                <Button
                    title={'Entrar'}
                    color='blue'
                    onPress={miOnPressDeIniciarSesion}
                />
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    fon:{
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center',
    },
    fondo: {
        backgroundColor: '#13D1B1',
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        borderRadius: 15,
        padding: 20,
    },

    margin:{
        marginTop: 30,
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 100
    },
    text:{
        marginTop: 10,
        backgroundColor: 'green',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        fontSize: 15,
        height: 40

    },
    text1:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        color: 'black',
        marginTop: 15,
    }
})

export default LoginApp;