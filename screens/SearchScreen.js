import react from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = react.useState('');
    // console.log(searchQuery,"query")

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#F7941D",
                flex: 1,
                alignItems: "center",
                justifyContent: 'space-evenly',
                paddingTop: 20,
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 15,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    minWidth: "90%",
                }}
            >
                <Feather name="search" size={24} color='#F7941D' />
                <TextInput
                    onChangeText={(text) => {
                        setSearchQuery(text);
                    }}
                    style={{
                        paddingLeft: 20,
                    }}
                    placeholder="Search Your Preferred Restaurant"
                />
            </View>

            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "800",
                        marginBottom: 60
                    }}
                >
                    Or
                </Text>
                <FontAwesome name="qrcode" size={100} color="black" />
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "800",
                        marginTop: 50,
                    }}
                >
                    Scan Pay & Enjoy!
                </Text>
            </View>
        </SafeAreaView>
    );
}
