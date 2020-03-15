import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import {Context as AuthContext} from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'

const SignupScreen = ({navigation})=>{
    const {state, signup,clearErrorMessage} = useContext(AuthContext);
    
    

    console.log(state);
    return (
    <View style = {styles.container}>
        <NavigationEvents
            //onWillFocus={()=>{}}
            //onDidFocus={()=>{}}
            onWillBlur={()=>{clearErrorMessage()}}
            //onDidBlur={()=>{}}
        />
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
           // onSubmit={({email,password})=> signup({email,password})}
           onSubmit = {signup}
        />
        <NavLink
            routeName = "Signin"
            text="Already have an account? Sign in instead!"
        />
        
        

    </View>
    );
};

SignupScreen.navigationOptions = ()=> {
    return {
        header: false
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
    
});

export default SignupScreen;