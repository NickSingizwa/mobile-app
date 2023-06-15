import React, { useEffect } from 'react';
import { View,Text,SafeAreaView,StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Signup');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={[tw`flex-1 items-center pt-44`,styles.container]}>
      <Text style={tw`text-4xl font-bold text-white`}>App Title</Text>
    </SafeAreaView>
  );
  
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#092468',
  },
})

export default WelcomeScreen;