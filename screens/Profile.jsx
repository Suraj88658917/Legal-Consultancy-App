import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/image36.png')} // Replace with your profile icon
        style={styles.profileImage}
      />

      <Text style={styles.name}>Suraj Saini</Text>
      <Text style={styles.email}>suraj@example.com</Text>

      <View style={styles.optionsContainer}>
        <OptionItem label="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
        <OptionItem label="My Appointments" onPress={() => navigation.navigate('Appointments')} />
        <OptionItem label="Change Password" onPress={() => navigation.navigate('ChangePassword')} />
        <OptionItem label="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const OptionItem = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.optionItem}>
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#f7f7f7',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
  },
  optionsContainer: {
    width: '90%',
  },
  optionItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
  },
});

export default Profile;
