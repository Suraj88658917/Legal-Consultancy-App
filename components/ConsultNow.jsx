

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConsultNow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consult Now Screen</Text>
    </View>
  );
};

export default ConsultNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
