import React from 'react';
import{
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity
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
         <Image style={styles.img} source={require('../image/x.png')}/>
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

            <Text style={styles.text2}>
                Contraseña
            </Text>

            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDePassword}
                    value={contrasenaUsuario}
                />
            </View>
            <View style={styles.recuperacion}>
                <TouchableOpacity>
                    <Text>¿Se te olvido la contraseña?</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style = {styles.margin}>
                    <Button
                        title={'Entrar'}
                        color='#055610'
                        onPress={miOnPressDeIniciarSesion}
                    />
                </View>
                <View style = {styles.margin}>
                    <Button
                        title={'Registrarse'}
                        color='#055610'
                        onPress={miOnPressDeIniciarSesion}
                    />
                </View>
            </View>
           
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    recuperacion:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 20
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    img:{
        marginTop: 0,
        marginLeft: 20,
        marginRight: 50,
        borderRadius: 15
    },

    fon:{
        backgroundColor: '#1707DF',
        height: '100%',
        justifyContent: 'center',
    },
    fondo: {
        backgroundColor: '#13D1B1',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        borderRadius: 15,
        padding: 20,
    },

    margin:{
        marginTop: 10,
        flex: 1,
        margin: 2,
        borderRadius: 100
    },
    text:{
        marginTop: 5,
        backgroundColor: '#0883AD',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        fontSize: 30,
        height: 40,
    },
    text1:{
        fontSize: 20,
        marginLeft: 75,
        marginRight: 75,
        color: 'black',
        marginTop: 0,
    },
    text2:{
        fontSize: 20,
        marginLeft: 60,
        marginRight: 60,
        color: 'black',
        marginTop: 15,
    }
})

export default LoginApp;