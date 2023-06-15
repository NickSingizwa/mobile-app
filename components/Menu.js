import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';

const Menu = () => {
    return (
      <View style={tw`bg-white flex-row justify-around items-center h-16 mt-2 rounded-t-3xl mx-2`}>
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Icon name="home" size={26} />
        </TouchableOpacity>
  
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Icon name="bell" size={22} />
        </TouchableOpacity>
  
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Icon name="briefcase" size={24} color='#F7941D'/>
        </TouchableOpacity>
  
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Icon name="clock-o" size={24} />
        </TouchableOpacity>
  
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Icon name="shopping-cart" size={24} />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Menu;
  