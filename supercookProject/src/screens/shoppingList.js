
import * as React from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity,TextInput,ImageBackground,Image,StyleSheet,Dimensions,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {SearchBox} from '../components/searchbox';
const { width, height } = Dimensions.get("screen");
export default class ShoppingListScreen extends React.Component{
    render(){
        return(
          <ImageBackground
          source={require('../../assest/themes/redbg.jpeg')}
          style={styles.ImageContainer}
          >
          <SafeAreaView style={{ flex: 1}}>
            <ScrollView>
              <View style={{flexDirection:'row',marginLeft:23}}>
                <View style={{alignItems:'flex-start',justifyContent:'center',marginTop:'12%',flex:1}}>
                  <Icon name="user-circle" size={25} color="white" />
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:'12%',flex:4}}>
                  <Text style={styles.textStyle}>Alışveriş Listesi</Text>
                </View>
                <TouchableOpacity style={{alignItems:'flex-end',justifyContent:'center',marginTop:'12%',flex:1,marginRight:23}}>
                <Image source={require('../../assest/images/moree.png')} style={styles.imageView} />

                </TouchableOpacity>
              </View>
              <View style={styles.Search}>
              <SearchBox inputPlaceHolder='Ekle...'/> 

              </View>
              <View style={styles.body}>
                <View style={{justifyContent:"center",alignItems:'center'}}>
                  <Text style={{fontSize:15,textAlign:'center',marginTop:'5%'}}>Alışveriş Listeniz Boş</Text>
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
    flexDirection: 'row',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation:0.3,
    padding:8
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
  width: 20,
  height: 20,
  color:'white'
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
textInputStyle:{
  alignSelf:'stretch',
  color:'black',
  padding:13,
  backgroundColor:'white',
  borderTopColor:'#ededed',
  marginTop:5,
  borderRadius:5,
  fontSize:16,
  flex:2
},

container:{
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
borderWidth: 0,
height:50,
borderRadius: 8,
margin: 23,
},
ImageStyle: {
padding: 10,
marginLeft: 18,
height: 5,
width: 5,
resizeMode: 'stretch',
alignItems: 'center',
}


})
