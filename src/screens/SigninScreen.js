import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'

const SigninScreen = ({navigation})=>{
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    

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
            headerText="Sign in to Your Account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign in"
           // onSubmit={({email,password})=> signup({email,password})}
           onSubmit = {signin}
        />
        <NavLink
            routeName = "Signup"
            text="Don't have an account? Sign up instead!"
        />
        
    </View>
    );
};

SigninScreen.navigationOptions = ()=> {
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

export default SigninScreen;