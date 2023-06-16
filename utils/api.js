import * as SecureStore from "expo-secure-store";

export const API_URL = 'http://192.168.8.118:5000/api/v1';

export async function getConfig() {
  const token = await SecureStore.getItemAsync("token");
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

export async function logOut() {
  await SecureStore.deleteItemAsync("token");
}
