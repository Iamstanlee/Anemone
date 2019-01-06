import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';


export default ({ onPress }) => (
  <View
    style={{
      flex: 1,
      paddingTop: 12,
      paddingHorizontal: 16,
      flexDirection: 'row',

      backgroundColor: '#FFFFFF',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#FFFFFFF',
    }}
  >
    <View style={{ flex: 1 }}>

    <Text style={{textAlign: 'center', fontFamily: 'ProximaNova-Regular'}}> 4.) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, purus a lacinia suscipit, augue arcu tempus ante, sed aliquam sapien ligula sit amet orci. Ut non nisi eu dui accumsan iaculis sed nec urna. Proin quis purus condimentum, sodales mi eget, faucibus ex. Mauris pharetra posuere elementum. Phasellus nec libero tempus, sagittis tortor nec, eleifend nibh. Praesent hendrerit vitae nulla non suscipit. Nunc dolor libero, gravida a lectus hendrerit, ornare mollis nisl. Cras mollis nunc eget enim pellentesque auctor. Pellentesque velit diam, molestie eget diam sit amet, vestibulum fringilla elit. Praesent libero dui, faucibus et ornare sit amet, sagittis sit amet ipsum. Sed quis auctor nisi, in pharetra velit. Mauris dui arcu, blandit eget justo vel, convallis tristique nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ultrices luctus elit, ut rutrum ipsum.</Text>


    </View>

  </View>
);
