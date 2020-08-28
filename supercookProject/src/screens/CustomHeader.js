import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class CustomHeader extends Component {
  render() {
    return (
        <View>
        <View style={{alignItems:'flex-end',justifyContent:'center',flex:1,marginRight:23}}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image style={{ width: 30, height: 30, marginLeft: 10 }}
                  source={require('../../assest/images/moree.png')}
                  resizeMode="contain"
                />
            </TouchableOpacity>
            {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>
                    {this.props.title}
                </Text>
            </View> */}
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}