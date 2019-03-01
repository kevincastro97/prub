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
    );
};

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'yellow',
    },

    margin:{
        marginTop: 25,
        marginLeft: 120,
        marginRight: 120
    },
    text:{
        marginTop: 5,
        backgroundColor: 'green',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30

    },
    text1:{
        fontSize: 25,
        marginLeft: 10,
        marginRight: 10,
        color: 'black'
    }
})

export default LoginApp;