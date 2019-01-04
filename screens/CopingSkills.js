import React from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image
} from 'react-native';

import LottieView from 'lottie-react-native';

import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';
import FourthCard from './FourthCard';
import FifthCard from './FifthCard';
import SixthCard from './SixthCard';

//TODO: USE PROXIMA NOVA

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4A637D',
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default () => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />
    <ScrollView
      style={styles.scrollView}
    >

    <View style={{
      position: 'absolute',
      height: '200%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',}}>
      <LottieView
      source={require('../balloons.json')}
      style={{
        height: '100%',
        width: '100%',
        }}
        autoPlay={true}
        loop={true}
        />
        </View>


      <FirstCard zIndex={100} />
      <SecondCard zIndex={90} />
      <ThirdCard zIndex={80} />
      <FourthCard zIndex={70} />
          <FifthCard zIndex={60} />
              <SixthCard zIndex={50} />
    </ScrollView>
  </View>
);
