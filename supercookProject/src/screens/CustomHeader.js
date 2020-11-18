import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
export default class CustomHeader extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row', height: 60, borderBottomWidth: 0.2, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.13,
        shadowRadius: 15,
        elevation: 3,
        backgroundColor:'#8b3d8d'
      }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            this.props.isHome ?
              <View>
                {/* <Image style={{ width: 25, height: 25, marginLeft: 10 }}
                  source={require('./assets/open-menu.png')}
                  resizeMode="contain"
                /> */}
              </View>
              :
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Actions.pop()}
              >
                <Icon
                  name='chevron-left'
                  color="white"
                  size={15}
                  style={{marginLeft: 10}}
              />
              </TouchableOpacity>
          }

        </View>
        <View style={{ flex: 11, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: 'white',fontSize:20 }}>
                {this.props.title}
              </Text>
        </View>
        {/* <View style={{ flex: 1, justifyContent: 'center'}}>
        {/* <Image source={require('../images/logo.jpg')} style={{width:80,height:80}}/> 
        </View> */}
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}