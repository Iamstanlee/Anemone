import React from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image
} from 'react-native';

import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import Interactable from 'react-native-interactable';

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
  <Interactable.View
  horizontalOnly={false}
  snapPoints={[
        {x: -140, y: -200},
        {x: 140, y: -200},
        {x: -140, y: -120},
        {x: 140, y: -120},
        {x: -140, y: 120},
        {x: 140, y: 120},
        {x: -140, y: 200},
        {x: 140, y: 200, tension: 50, damping: 0.9}
      ]}
  initialPosition={{x: -140, y: -100}}
  onSnap={this.onDrawerSnap}>

<View>
<Image source={require('../assets/seahorse.png')} style={{width: 50, height: 50}}/>
</View>
</Interactable.View>
    <StatusBar
      barStyle="light-content"
    />
    <ScrollView
      style={styles.scrollView}
    >
      <FirstCard zIndex={100} />
      <SecondCard zIndex={90} />
      <FirstCard zIndex={80} />
      <SecondCard zIndex={70} />
    </ScrollView>
  </View>
);
