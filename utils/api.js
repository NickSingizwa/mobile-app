import * as SecureStore from "expo-secure-store";

export const API_URL = 'http://192.168.1.169:5000';

export const config = {
    headers: {
      Authorization: "Bearer " + SecureStore.getItemAsync("token"),
    },
};