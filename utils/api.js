import * as SecureStore from "expo-secure-store";

export const API_URL = 'http://192.168.0.124:5000/api/v1';

export const config = {
    headers: {
      Authorization: "Bearer " + SecureStore.getItemAsync("token"),
    },
};

export async function logOut() {
  await SecureStore.deleteItemAsync("token")
}