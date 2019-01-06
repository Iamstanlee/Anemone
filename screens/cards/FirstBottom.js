import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Button
} from 'react-native';

import FoldView from 'react-native-foldview';

import FirstMiddle from './FirstMiddle';


export default class FirstBottom extends Component {

  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#ffffff',
          flex: 1,
        }}
      >
      </View>
    );
  }

  renderBackface() {
    const onPress = this.props.onPress;
    return (
      <View style={{ flex: 1 }}>

        <FoldView
          renderFrontface={this.renderBlankFace}
          renderBackface={this.renderInnerBackFace}
        >
        <FirstMiddle onPress={onPress} />

        </FoldView>

      </View>
    );
  }

  renderInnerBackFace() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#ffffff',
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#ffffff',
            flex: 1,
            margin: 14,
            borderRadius: 2,
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPress}
          >
          <Text>
            <Text style={{textAlign:'center'}}> 5.) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, purus a lacinia suscipit, augue arcu tempus ante, sed aliquam sapien ligula sit amet orci. Ut non nisi eu dui accumsan iaculis sed nec urna. Proin quis purus condimentum, sodales mi eget, faucibus ex. Mauris pharetra posuere elementum. Phasellus nec libero tempus, sagittis tortor nec, eleifend nibh. Praesent hendrerit vitae nulla non suscipit. Nunc dolor libero, gravida a lectus hendrerit, ornare mollis nisl. Cras mollis nunc eget enim pellentesque auctor. Pellentesque velit diam, molestie eget diam sit amet, vestibulum fringilla elit. Praesent libero dui, faucibus et ornare sit amet, sagittis sit amet ipsum. Sed quis auctor nisi, in pharetra velit. Mauris dui arcu, blandit eget justo vel, convallis tristique nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ultrices luctus elit, ut rutrum ipsum.</Text>
            </Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  render() {
    const onPress = this.props.onPress;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
        }}
      >

        <View style={{ flex: 1 }} >

          <View
            style={{
              flex: 1,
              paddingBottom: 10,
              padding: 16,
            }}
          >

            <Text style={{textAlign:'center'}}> 2.)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, purus a lacinia suscipit, augue arcu tempus ante, sed aliquam sapien ligula sit amet orci. Ut non nisi eu dui accumsan iaculis sed nec urna. Proin quis purus condimentum, sodales mi eget, faucibus ex. Mauris pharetra posuere elementum. Phasellus nec libero tempus, sagittis tortor nec, eleifend nibh. Praesent hendrerit vitae nulla non suscipit. Nunc dolor libero, gravida a lectus hendrerit, ornare mollis nisl. Cras mollis nunc eget enim pellentesque auctor. Pellentesque velit diam, molestie eget diam sit amet, vestibulum fringilla elit. Praesent libero dui, faucibus et ornare sit amet, sagittis sit amet ipsum. Sed quis auctor nisi, in pharetra velit. Mauris dui arcu, blandit eget justo vel, convallis tristique nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ultrices luctus elit, ut rutrum ipsum.</Text>


            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}
            >

              <TouchableHighlight
                onPress={onPress}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10,
                    backgroundColor: '#ffffff',
                  }}
                />
              </TouchableHighlight>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}
              >
              </View>

            </View>

          </View>

          <View style={{ flex: 1 }}>

            <FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderBackface}
            >
            <View>

              <Text style={{textAlign:'center'}}> 3.)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, purus a lacinia suscipit, augue arcu tempus ante, sed aliquam sapien ligula sit amet orci. Ut non nisi eu dui accumsan iaculis sed nec urna. Proin quis purus condimentum, sodales mi eget, faucibus ex. Mauris pharetra posuere elementum. Phasellus nec libero tempus, sagittis tortor nec, eleifend nibh. Praesent hendrerit vitae nulla non suscipit. Nunc dolor libero, gravida a lectus hendrerit, ornare mollis nisl. Cras mollis nunc eget enim pellentesque auctor. Pellentesque velit diam, molestie eget diam sit amet, vestibulum fringilla elit. Praesent libero dui, faucibus et ornare sit amet, sagittis sit amet ipsum. Sed quis auctor nisi, in pharetra velit. Mauris dui arcu, blandit eget justo vel, convallis tristique nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ultrices luctus elit, ut rutrum ipsum.</Text>


            </View>
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
