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

import SecondMiddle from './SecondMiddle';


export default class SecondBottom extends Component {

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
        <SecondMiddle onPress={onPress} />

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
            <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Take your time with each breath.
There are other forms of breathing but this is the easiest to complete if you’re feeling stressed.
            </Text>

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
              padding: 16,
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >

            <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15,}}>Belly Breathing:{"\n"}{"\n"}
Sit or lie flat in a comfortable position.
Put one hand on your belly just below your ribs and the other hand on your chest.
</Text>


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
                    width: 5,
                    height: 5,
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

          <View style={{ flex: 1}}>

            <FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderBackface}
            >
            <View style={{
              flex: 1,
              paddingBottom: 10,
              padding: 16,
            }}>

              <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Take a deep breath in through your nose and let your belly push your hand out. Your chest should not move.
</Text>


            </View>
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
