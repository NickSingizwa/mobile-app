import React,{useState,useEffect} from 'react'
import { Text, View , FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Menu from '../components/Menu';
import { API_URL,config } from '../utils/api';
import axios from 'axios';
import NearbyImage from '../assets/image.png'

const Sampledata = [
    {
        id: "1",
        image: NearbyImage,
        Model: "Rav 4",
        Price: "13 Million",
        Company: "Toyota",
        Year: "2020"
    },
]

const HomeScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/vehicle/`,config);
            // console.log(response,"response");
            setData(response?.data?.data?.vehicles);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <SafeAreaView style={tw`flex-1`}>
        <Text style={{color: '#F7941D', marginTop: 40, marginLeft: 35, marginBottom: 18}}>Registered cars</Text>

        <FlatList data={Sampledata} keyExtractor={(item) => item.id} renderItem={({item: {Model,Price,Company,image,Year}})=>(
            <TouchableOpacity style={[tw`flex-row items-center px-3 py-2 mt-4 rounded-xl mx-8`,{backgroundColor: '#F8F8FB'}]}>
            <Image
                style={tw`rounded p-3 mr-4 w-16 h-16`}
                source={image}
                color="white"
                size={18}
            />
                <View>
                    <Text style={tw`font-semibold`}>{Company}</Text>
                    <Text>{Model} - <Text style={tw`text-xs text-gray-400`}>{Year}</Text></Text>
                    <Text style={tw`text-gray-500`}>{Price}</Text>
                </View>
            </TouchableOpacity>
        )}/>

      <Menu/>
    
  </SafeAreaView>
  )
}

export default HomeScreen