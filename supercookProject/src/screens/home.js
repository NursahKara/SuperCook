import React, { Component } from 'react';
import { StyleSheet, View, Text,Image ,TouchableOpacity, ImageBackground,ScrollView,SafeAreaView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomHeader from './CustomHeader';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        console.log('home::::::::',this.props.token)
    //     fetch('http://192.168.41.182/IfsTerminalService/Data/InventoryPartByBarcodeId/'+this.state.id, {
    //   method: 'GET',
    //   headers: new Headers({
    //     'Authorization': 'bearer '+ ' ' +this.props.token
    //   }), 
    // })
    //   .then((response) => response.json())
    //   .then((responsejson) => {
    //     this.setState({
    //       isLoading: false,
    //       data: responsejson.subjects,
    //     })
    //   })
    //   .catch((error) => console.error(error));
  
    }
  render() {
    return (
        <SafeAreaView>
        <CustomHeader isHome={true} title="Anasayfa"/>
        <ScrollView style={{marginLeft:'auto', margin:'auto'}}>
            <View style={{flexDirection:'row',marginTop:25}}>
                <TouchableOpacity style={styles.card} onPress={()=>Actions.stockQuery({token:this.props.token})}>
                    <Image   source={require('../../assest/images/warehouse-128.png')} style={styles.image}/>
                    <Text style={{alignItems:'center',fontWeight:'bold', fontSize:16,marginLeft:'auto',marginRight:'auto',marginTop:10}}>STOK SORGULAMA</Text>
                    <Text style={{alignItems:'center', fontSize:14,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Malzeme Listesi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={()=>Actions.stockQuery({token:this.props.token})}>
                <Image   source={require('../../assest/images/warehouse-128.png')} style={styles.image}/>
                    <Text style={{alignItems:'center',fontWeight:'bold', fontSize:16,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Card Başlığı</Text>
                    <Text style={{alignItems:'center', fontSize:14,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Card Açıklaması</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.card} onPress={()=>Actions.stockQuery({token:this.props.token})}>
                <Image   source={require('../../assest/images/warehouse-128.png')} style={styles.image}/>
                    <Text style={{alignItems:'center',fontWeight:'bold', fontSize:16,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Card Başlığı</Text>
                    <Text style={{alignItems:'center', fontSize:14,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Card Açıklaması</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={()=>Actions.stockQuery({token:this.props.token})}>
                <Image   source={require('../../assest/images/warehouse-128.png')} style={styles.image}/>
                    <Text style={{alignItems:'center',fontWeight:'bold', fontSize:16,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Card Başlığı</Text>
                    <Text style={{alignItems:'center', fontSize:14,marginLeft:'auto',marginRight:'auto',marginTop:10}}>Card Açıklaması</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 card:{
width:'42%',
height:170,
backgroundColor:'white',
margin:15,
marginTop:30,
borderRadius: 20,
borderColor: 'gray',
alignItems:'flex-start',
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 5,
},
shadowOpacity: 1,
shadowRadius: 3.84,
elevation: 10,
 },
 image:{
     width:60,
     height:60,
     zIndex:-1,
     marginLeft:'32%',
     marginTop:20
     }
});