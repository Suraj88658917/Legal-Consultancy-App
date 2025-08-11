import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SubHeader1 from '../components/SubHeader1';
// import Category from '../components/Category';
// import Carousel from '../components/Carousel';
// import Services from '../components/Services';

const MainHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="#5edc1f" barStyle="light-content" />
      <View style={styles.view} />

      {/* Custom components */}
      <Header />
      

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SubHeader/>
       <SubHeader1/>
        {/* <Category /> */}
        {/* <Carousel /> */}
        {/* <Services /> */}
        {/* <Logout /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  view: {
    width: '100%',
    height: 5,
    backgroundColor: '#5edc1f',
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
