import React, { Component } from 'react';
import{StyleSheet,Text,View,TextInput,Image,TouchableOpacity} from 'react-native';

class Card extends Component{
    render(){
        return(
                <TouchableOpacity style={styles.cardDesign}>
                    <Image source={require('../../assest/cooks/soup.jpg')} />
                </TouchableOpacity>
                
        )
    }
}
const styles=StyleSheet.create({
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
   cardDesign:{
    width:100,
    height:200,
    marginRight:15,
    marginTop:5,
    borderRadius:5,
    
  },
});
export default Card;
