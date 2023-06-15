import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import tw from 'tailwind-react-native-classnames';
import * as SecureStore from 'expo-secure-store';
import API_URL from '../utils/api';
import axios from 'axios';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePassChange = (text) => {
      setPass(text);
    };
 
    const handleProceedLogin = async ()=>{
        if (!email || !password) {
          Alert.alert('Validation Error', 'Please enter both email and password.');
          return;
        }
    
        setLoading(true);
        try {
          const response = await axios.post(API_URL+'/user/login', {
            email,
            password,
          });
          // console.log("response",response?.data?.token)
          const token = response?.data?.token;
          await SecureStore.setItemAsync('token', token);
    
          if (token) {
            setEmail('');
            setPass('');
      
            setLoading(false);
            // Alert.alert('Login Successful');
            navigation.navigate('NearbyRestaurants')
          }

        } catch (error) {
          console.log(error,"catch error")
          setLoading(false);
          Alert.alert('Login Failed', error?.response?.data?.message);
        }
    }

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
            <View style={styles.minicontainer}>
                <Text style={styles.text}>Supa<Text style={styles.span}>Menu</Text></Text>
                <View style={styles.microcontainer}>
                <Text style={styles.subtitles}>Welcome...</Text>
                <Text style={tw`text-gray-600`}>Sign in to continue</Text>
                </View>
                <View style={styles.form}>
                <CustomInput value={email} placeholder="Your Email" icon="mail" keyBoardType="email-address" onChange={handleEmailChange}/>
                <CustomInput value={password} placeholder="Password" icon="lock" keyBoardType="default" HiddenText onChange={handlePassChange}/>
                <CustomButton text={loading ? 'Signing in ...' : 'Signin'} onPress={handleProceedLogin} bg='#fc9403' color='white'/>
                <View style={styles.linecontainer}>
                    <View style={styles.line} />
                    <Text style={styles.linetext}>or</Text>
                    <View style={styles.line} />
                </View>
                <CustomButton text="Login with Google" border='border border-gray-500' color='gray'/>
                <CustomButton text="Login with Facebook" border='border border-gray-500' color='gray'/>
                <Text style={tw`text-yellow-600 mb-5`}>Forgot Password?</Text>
                <Text>Don't have an account? <Text style={tw`text-yellow-600 underline`} onPress={()=>navigation.navigate('Signup')}>Register</Text></Text>
                </View>
            </View>
            </View>
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc9403',
  },

  subcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    width:'100%',
    marginTop: 80,
    backgroundColor: '#ffff',
  },

  minicontainer:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },

  microcontainer:{
   alignItems:'center',
   paddingTop: 15
  },

  text:{
    fontSize:30,
    fontWeight:900,
  },

  span:{
    fontSize:30,
    fontWeight:900,
    color: '#fc9403'
  },

  subtitles:{
    color: '#222582',
    fontWeight: 800,
    fontSize: 16,
    marginBottom: 10
  },

  form:{
    flex: 1,
    alignItems: 'center',
    width:'100%',
    padding:20
  },

  linecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  linetext: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#ccc',
    fontSize:20
  },

})

export default SignupScreen