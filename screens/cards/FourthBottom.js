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

import FourthMiddle from './FourthMiddle';


export default class FourthBottom extends Component {

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
        <FourthMiddle onPress={onPress} />

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
            <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Perhaps visit the virtual Grounding Box on the next page and click on Sully the seahorse for some inspirational quotes you can read.
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

            <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15,}}>There are many ways to engage in diversion skills, but most differ for each individual.{"\n"}{"\n"}
 Some examples of diversion skills include the following:
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

              <Text style={{textAlign:'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Coloring, walking/petting your dog, taking a shower, watching TV, listening to music, exercising, playing a game, and napping
</Text>


            </View>
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
