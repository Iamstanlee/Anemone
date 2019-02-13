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

import SixthMiddle from './SixthMiddle';


export default class SixthBottom extends Component {

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
        <SixthMiddle onPress={onPress} />

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
            <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Try limiting how much time you spend on your phone about an hour before your actual bedtime to get your body ready to sleep.


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

            <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15,}}>The two most common complaints people have regarding sleep are difficulty falling asleep and difficulty staying asleep. These symptoms can be the result of psychiatric meds, excessive worrying, and low mood.

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

              <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Don’t worry though because there are several ways to improve sleep patterns through basic lifestyle changes such as:



</Text>


            </View>
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
