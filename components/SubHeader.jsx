
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SubHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Lawyer{"\n"}Consultation Anytime{"\n"}Anywhere</Text>
      <Text style={styles.subtitle}>
        Legal Consultation Starts from <Text style={styles.price}>₹19.99/min</Text>
      </Text>

      <View style={styles.row}>
        <View style={styles.avatars}>
          <Image source={require('../assets/images/image36.png')} style={styles.avatar} />
          <Image source={require('../assets/images/image36.png')} style={styles.avatar} />
          <Image source={require('../assets/images/image36.png')} style={styles.avatar} />
          <View style={styles.plusCircle}>
            <Text style={styles.plusText}>+146</Text>
          </View>
        </View>

        <View style={styles.onlineRow}>
          <Text style={styles.onlineText}>Lawyers are online</Text>
          <View style={styles.dot} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConsultNow')}
      >
        <Text style={styles.buttonText}>Consult now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:350,
    backgroundColor: '#f5c5e1ff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 25,
  },
  price: {
    color: '#1e40af',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  avatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4338ca',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  plusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  onlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineText: {
    color: '#444',
    marginRight: 5,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
 button: {
  backgroundColor: '#4338ca',
  paddingVertical: 12,       // reduced padding to decrease size
  paddingHorizontal: 16,     // balanced horizontal padding
  borderRadius: 5,
  alignItems: 'center',
  alignSelf: 'flex-start',   // move to left side
  marginLeft: 10,            // optional: add some left margin if needed
  elevation: 3,
  width: 150,                // optional: set a fixed width to control size
},

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
