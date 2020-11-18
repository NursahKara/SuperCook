import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset'
import LoginScreen from './login';

function cacheImages(images){
    return images.map(image=>{
        if(typeof images ==='string'){
            return Image.prefetch(image);
        }else{
            return Asset.fromModule(image).downloadAsync();
        }
    });
}
export default class Index extends Component {
    constructor(){
        super();
        this.state={
            isReady:false
        }
    }
    async _loadAssetsAsync(){
        const imageAssets=cacheImages([require('../../assest/images/bg-yaprak.jpg')]);
        await Promise.all([...imageAssets]);
    }
  render() {
      if(!this.state.isReady){
          return(
              <AppLoading
              startAsync={this._loadAssetsAsync}
              onFinish={()=>this.setState({isReady:true})}
              onError={console.warn}
              />
          );
      }
    return (
     <LoginScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  }
});