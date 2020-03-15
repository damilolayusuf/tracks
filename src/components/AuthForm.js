import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import Spacer from './spacer';

import {Text, Button, Input} from 'react-native-elements';

const AuthForm = ({headerText, errorMessage,onSubmit, submitButtonText})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>
        <Input 
            label="Email" 
            value = {email} 
            onChangeText={(newEmail)=> setEmail(newEmail)}
            autoCorrect = {false}
            autoCapitalize="none"
            
            />
        <Spacer/>
        <Input 
            label="Password" 
            value = {password} 
            onChangeText={(newpassword)=> setPassword(newpassword)}
            autoCorrect = {false}
            autoCapitalize="none"
            secureTextEntry = {true}
            
            />
           {errorMessage ?  <Text style = {styles.errorMessage}>{errorMessage} </Text>: null }
        <Spacer>
        <Button title={submitButtonText} onPress = {()=> onSubmit({email,password})}/>

        </Spacer>
    </>
    )

}

const styles = StyleSheet.create ({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;