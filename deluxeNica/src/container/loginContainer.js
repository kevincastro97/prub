import React, { Component } from 'react';
import {
    Alert,
} from 'react-native'
import LoginApp from '../components/loginDeluxeNica';
import Menu from '../components/menuDeluxeNica'

class LoginContainer extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            usuario: '',
            pass: '',
            logged: false,
        };
        
    }

    miEventoDeUsuario = (text) => {
        this.setState({ usuario: text, });
    }

    miEventoDePass = (text) => {
        this.setState({ pass: text, });
    }

    miEventoDeBotonIniciarSession = () => {
        const { usuario, pass } = this.state;
        if(usuario === "Admin" && pass === "1234") {
            this.setState({
                logged: true,
            });
        }
        else {
            Alert.alert("Mi Mensaje", "Usuario o contraseña incorrecto");
        }
    }

    isLogged = () => {

        const { logged } = this.state;

        return logged;

    };

    render() {

        const usuario = this.state.usuario;
        const pass = this.state.pass;

        if(!this.isLogged()) {
            return (
                <LoginApp
                    miOnChangeDeUSuario={ this.miEventoDeUsuario }
                    miOnChangeDePassword={ this.miEventoDePass }
                    miOnPressDeIniciarSesion={ this.miEventoDeBotonIniciarSession }
                    nombreUsuario={ usuario }
                    contrasenaUsuario={ pass }
                />
            );
        } else {
            return (
                <Menu/>
            );
        }
    }

}

export default LoginContainer;