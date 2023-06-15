import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import tw from 'tailwind-react-native-classnames';
import {API_URL} from '../utils/api';
import axios from 'axios';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [phone, setPhone] = useState('');
    const [nid, setNid] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleNameChange = (text) => {
      setNames(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePhoneChange = (text) => {
      setPhone(text);
    };

    const handleNidChange = (text) => {
      setNid(text);
    };
  
    const handlePassChange = (text) => {
      setPass(text);
    };

    const handleConfirmPassChange = (text) => {
      setConfirmpass(text);
    };
 
    const handleProceed = ()=>{
      //check if any of the field is empty
      if (!names || !email || !phone || !pass) {
        Alert.alert('Error', 'Please provide all fields');
        return;
      }
      //check if password length is less than 6
      if (pass.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters');
        return;
      }
      //check if password and confirm password match
      if (pass !== confirmpass) {
        Alert.alert('Error', 'Password and Confirm Password must match');
        return;
      }

      //change the loading state and call api to register user
        setLoading(true);
        axios.post(API_URL+'/user/register', {
          fullName: names,
          phoneNumber: phone,
          email: email,
          password: pass
        })
        .then((res) => {
            setLoading(false);
            // console.log(res?.data?.message,"success response")
            if(res?.data?.message === 'Signup successful'){
              //redirect to login screen
                navigation.navigate('Login');
            }
        })
        .catch((err) => {
            setLoading(false);
            console.log(err,"catch err");
            alert(err?.response?.data?.message===undefined ? "Network Error" : err?.response?.data?.message);
        })
    }

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
            <View style={styles.minicontainer}>
                <Text style={styles.text}>App Title</Text>
                <View style={styles.microcontainer}>
                <Text style={styles.subtitles}>Create account</Text>
                </View>
                <View style={styles.form}>
                <CustomInput value={names} placeholder="Full Name" keyBoardType="default" onChange={handleNameChange}/>
                <CustomInput value={phone} placeholder="Phone Number" keyBoardType='numeric' onChange={handlePhoneChange}/>
                <CustomInput value={email} placeholder="Your Email" keyBoardType="email-address" onChange={handleEmailChange}/>
                <CustomInput value={nid} placeholder="National Id" keyBoardType="default" onChange={handleNidChange}/>
                <CustomInput value={pass} placeholder="Password" keyBoardType="default" HiddenText onChange={handlePassChange}/>
                <CustomInput value={confirmpass} placeholder="Confirm Password" keyBoardType="default" HiddenText onChange={handleConfirmPassChange}/>
                <CustomButton text={loading ? 'Creating account ...' : 'Signup'} onPress={handleProceed} bg='#092468' color='white'/>
                <Text>Already have an account? <Text style={[tw`underline`,{color: "#092468"}]} onPress={()=>navigation.navigate('Login')}>Signin</Text></Text>
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
    backgroundColor: '#092468',
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