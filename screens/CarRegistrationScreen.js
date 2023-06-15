import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import tw from 'tailwind-react-native-classnames';
import { API_URL,config } from '../utils/api';
import axios from 'axios';
import Menu from '../components/Menu';

const CarRegistrationScreen = () => {
  const navigation = useNavigation();
  const [modelName, setModelName] = useState('');
  const [price, setPrice] = useState('');
  const [owner, setOwner] = useState('');
  const [year, setYear] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  const handleModelNameChange = (text) => {
    setModelName(text);
  };

  const handlePriceChange = (text) => {
    setPrice(text);
  };

  const handleOwnerChange = (text) => {
    setOwner(text);
  };

  const handleYearChange = (text) => {
    setYear(text);
  };

  const handleCompanyChange = (text) => {
    setCompany(text);
  };

  const handleProceed = () => {
    //check if any of the field is empty
    if (!modelName || !price || !company || !owner || !year) {
      Alert.alert('Error', 'Please provide all fields');
      return;
    }

    //change the loading state and call api to register user
    setLoading(true);
    axios
      .post(API_URL + '/vehicle', {
        manufactureCompany: company,
        manufactureYear: year,
        price,
        modelName,
        owner,
      },config)
      .then((res) => {
        setLoading(false);
        // console.log(res?.data?.message,"success response")
        if (res?.data?.message === 'Vehicle registered successfully') {
          //clear all fields and alert success
            setModelName('');
            setPrice('');
            setOwner('');
            setYear('');
            setCompany('');
            Alert.alert('Success', res?.data?.message);
        }
        else{
            Alert.alert('Error', res?.data?.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, 'catch err');
        alert(
          err?.response?.data?.message === undefined
            ? 'Network Error'
            : err?.response?.data?.message
        );
      });
  };

  return (
    <View style={styles.container}>
      <View style={tw`flex-1`}>
        <View style={styles.content}>
          <View style={styles.minicontainer}>
            <Text style={styles.text}>App Title</Text>
            <View style={styles.microcontainer}>
              <Text style={styles.subtitles}>Car Registration</Text>
            </View>
            <View style={styles.form}>
              <CustomInput
                value={modelName}
                placeholder="Model Name"
                keyBoardType="default"
                onChange={handleModelNameChange}
              />
              <CustomInput
                value={price}
                placeholder="Price"
                keyBoardType="default"
                onChange={handlePriceChange}
              />
              <CustomInput
                value={owner}
                placeholder="Owner"
                keyBoardType="default"
                onChange={handleOwnerChange}
              />
              <CustomInput
                value={year}
                placeholder="Manufacture Year"
                keyBoardType="default"
                onChange={handleYearChange}
              />
              <CustomInput
                value={company}
                placeholder="Manufacture Company"
                keyBoardType="default"
                onChange={handleCompanyChange}
              />
              <CustomButton
                text={loading ? 'Registering car ...' : 'Register Car'}
                onPress={handleProceed}
                bg="#092468"
                color="white"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  menuContainer: {
    width: '100%',
  },
  minicontainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
  microcontainer: {
    alignItems: 'center',
    paddingTop: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 15,
  },
  subtitles: {
    color: '#222582',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 10,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    width: '95%',
    padding: 20,
  },
});

export default CarRegistrationScreen;
