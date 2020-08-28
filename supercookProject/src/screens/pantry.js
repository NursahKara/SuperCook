
import * as React from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity,ImageBackground,StyleSheet,Dimensions,ScrollView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {SearchBox} from '../components/searchbox';
import CustomHeader from './CustomHeader';
const { width, height } = Dimensions.get("screen");
export default class PantryScreen extends React.Component{
    render(){
        return(
        <ImageBackground
          source={require('../../assest/themes/redbg.jpeg')}
          style={styles.ImageContainer}
          >
          <SafeAreaView style={{ flex: 1}}>
            <ScrollView>
              <View style={{flexDirection:'row',marginLeft:5}}>
                <View style={{justifyContent:'center',marginTop:'11%'}}>
                  <CustomHeader  navigation={this.props.navigation}/>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:'12%',flex:4}}>
                  <Text style={styles.textStyle}>Malzemeler</Text>
                </View>
                <View style={{alignItems:'flex-start',justifyContent:'center',marginTop:'12%',flex:1}}>
                  <Icon name="user-circle" size={25} color="white" />
                </View>
              </View>
              <View style={styles.Search}>
                <SearchBox inputPlaceHolder='Ekle/Çıkar...'/>   
              </View>
              <View style={styles.body}>
                <View style={{marginLeft:23,marginTop:20,marginRight:23,marginBottom:20,height:110}}>
                  <TouchableOpacity style={styles.smallCardDesign}>
                    <View style={{justifyContent: 'center',alignItems:'center', marginBottom: 5, marginTop: 5 }}>
                      <Text style={styles.title1Style}>Sesli Arama Yap!</Text>
                    </View>  
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      <View style={{  justifyContent: 'center', alignItems:'center',padding: 3,borderRadius:100,backgroundColor:'#E57373',height:60,width:60 }}>
                        <Image source={require('../../assest/images/mic-w.png')} style={styles.imageView} />
                      </View>
                    </View>    
                  </TouchableOpacity>
                </View>
              </View>
           </ScrollView>  
          </SafeAreaView>
        </ImageBackground>
        );
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
    borderTopRightRadius:20,
    borderTopLeftRadius:20
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
