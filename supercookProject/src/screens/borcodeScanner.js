import React from 'react';
import {Linking, Text, View,TouchableOpacity,Alert,StyleSheet,Dimensions,ImageBackground,SafeAreaView,ScrollView,Image, Button} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import CustomHeader from './CustomHeader';
import {SearchBox} from '../components/searchbox';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("screen");
export default class BarcodeScannerScreen extends React.Component{
    ifScaned=e=>{
        Linking.openURL(e.data).catch(err=>
            Alert.alert("Invalid Qr Code",e.data));
    }
    render(){
        return(
          <SafeAreaView style={{ flex: 1}}>
            <ScrollView>
                <ImageBackground  source={require('../../assest/themes/redbg.jpeg')}
                    style={styles.ImageContainer}>
                    <View style={{flexDirection:'row',marginLeft:5,paddingBottom:20}}>
                        <View style={{justifyContent:'center',marginTop:'11%'}}>
                            <CustomHeader  navigation={this.props.navigation}/>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',marginTop:'12%',flex:4,paddingBottom:15}}>
                            <Text style={styles.textStyle}>Barkod Okut</Text>
                        </View>
                        <View style={{alignItems:'flex-start',justifyContent:'center',marginTop:'12%',flex:1,paddingBottom:15}}>
                            <Icon name="user-circle" size={25} color="white" />
                        </View>
                    </View>
                </ImageBackground>
              <View style={{marginTop:60}}>
              <QRCodeScanner
                containerStyle={{backgroundColor:'#fff'}}
                onRead={this.ifScaned}
                reactivate={true}
                permissionDialogMessage="Need Permission To Access Camera"
                reactivateTimeout={10}
                showMarker={true}
                markerStyle={{borderColor:'#fff',borderRadius:10}}
                bottomContent={
                <TouchableOpacity> 
                    <Text style={{fontSize:21,color:'rgb(0,122,255)'}}>Scan</Text>
                </TouchableOpacity>
                }
                />
              </View>
              <View style={{marginTop:30}}>
                  <Button title="geri" onPress={()=>this.props.navigation.navigate('Menu')}/> 
              </View>
           </ScrollView>  
           </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
    ImageContainer: {
      flex:1,
       padding: 0,
       zIndex: 1,
       opacity:1
     },
     Search:{
     },
     textStyle:{
      fontSize:25,
      color:'white',
      fontFamily:'Cochin',
      fontWeight:'bold',
     },
     body:{
      backgroundColor:'white',
      flex:1,
      height:height,
     },
     topCardDesign: {
      margin: 3,
      borderWidth: 0.3,
      borderColor: 'green',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 7,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      }
    },
    smallCardDesign:{
      height: 'auto',
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      borderColor: 'gray',
      borderBottomWidth: 0,
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 0,
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation:0.3,
      padding:8,
      backgroundColor:'#f5f5f5'
    },
    title1Style: {
      fontSize: 16,
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      opacity:0.7
    },
    title2Style: {
      fontSize: 20,
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      opacity:1
    },
    title3Style: {
      fontSize: 10,
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      opacity:0.5
    },
    imageView: {
    width: 25,
    height: 25,
  },
  cardDesign:{
    width:280,
    height:320,
    marginRight:15,
    marginTop:5,
    borderRadius:5
  },
  cardImage:{
    width: 280,
    height: 280,
  },
  cardDesignSmall:{
    width:140,
    height:200,
    marginRight:15,
    marginTop:5,
    borderRadius:5
  },
  })