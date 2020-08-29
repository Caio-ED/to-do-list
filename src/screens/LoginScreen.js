import React from 'react'

import Button from '../components/Button'
import ScreenTitle from '../components/ScreenTitle'
import TextInput from '../components/TextInput'

const LoginScreen = ({history}) => {

    return (
        <>
        <ScreenTitle>Tela de Login</ScreenTitle>
        <TextInput placeholder="seu@email.com" onChangeText={(e)=>{console.log(e)}}/>
        <Button OnPress={() => { history.push('/')}}>Entrar</Button>
        <Button OnPress={() => { history.push('/signup')}}> Cadastrar</Button>
        
        </>
    )
}

export default LoginScreen;