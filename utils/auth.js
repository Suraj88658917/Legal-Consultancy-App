import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (err) {
    console.error('Token error', err);
    return null;
  }
};
