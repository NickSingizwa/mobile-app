import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View , FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Menu from '../components/Menu';
import NearbyImage from '../assets/image.png'

const data = [
    {
        id: "1",
        image: NearbyImage,
        Title: "Choose Kigali",
        subTitle: "World, African, Pizzeria, Coffe",
    },
    {
        id: "2",
        image: NearbyImage,
        Title: "Choose Kigali",
        subTitle: "World, African, Pizzeria, Coffe",
    },
    {
        id: "3",
        image: NearbyImage,
        Title: "Choose Kigali",
        subTitle: "World, African, Pizzeria, Coffe",
    },
    {
        id: "4",
        image: NearbyImage,
        Title: "Choose Kigali",
        subTitle: "World, African, Pizzeria, Coffe",
    },
    {
        id: "5",
        image: NearbyImage,
        Title: "Choose Kigali",
        subTitle: "World, African, Pizzeria, Coffe",
    },
    {
        id: "6",
        image: NearbyImage,
        Title: "Choose Kigali",
        subTitle: "World, African, Pizzeria, Coffe",
    },
]

const NearbyRestaurants = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1`}>
        <Text style={{color: '#F7941D', marginTop: 40, marginLeft: 35, marginBottom: 18}}>Nearby Restaurants</Text>

        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item: {Title,subTitle,image}})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Search')} style={[tw`flex-row items-center px-3 py-2 mt-4 rounded-xl mx-8`,{backgroundColor: '#F8F8FB'}]}>
            <Image
                style={tw`rounded p-3 mr-4 w-16 h-16`}
                source={image}
                color="white"
                size={18}
            />
                <View>
                    <Text style={tw`font-semibold`}>{Title}</Text>
                    <Text style={tw`text-gray-500`}>{subTitle}</Text>
                </View>
            </TouchableOpacity>
        )}/>

      <Menu/>
    
  </SafeAreaView>
  )
}

export default NearbyRestaurants