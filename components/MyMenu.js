import { Text, TouchableOpacity, View, DeviceEventEmitter } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function MyMenu({ hotel, item, name }) {
    return (
        <TouchableOpacity
            onPress={() => {
                DeviceEventEmitter.emit("event.goToCartFullProccess", {
                    hotel,
                    category: item,
                });
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    paddingTop: 10,
                    paddingBottom: 10,
                }}
            >
                <Text style={{ color: "white", width: "40%" }}>{name}</Text>
                <Entypo name="chevron-small-right" size={24} color="white" />
            </View>
        </TouchableOpacity>
    );
}
