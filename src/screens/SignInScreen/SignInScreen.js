import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/otw-app-img.png'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    //console.warn("Sign in");

    navigation.navigate('HomeScreen');
  }

  const onForgotPasswordPressed = () => {
    //console.warn('Forgot Password')
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPressed = () => {
    //console.warn("Sign Up")
    navigation.navigate('SignUp')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

        <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput 
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry ={true}
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton 
        text="Don't have an account? Create one" 
        onPress={onSignUpPressed} 
        type="TERTIARY"
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        width:'70%' ,
        maxWidth: 300,
        maxHeight:200,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
});

export default SignInScreen;