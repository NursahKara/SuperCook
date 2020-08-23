import React, { Component } from 'react';
import{StyleSheet,Text,View,TextInput,Image} from 'react-native';

const SearchBox=({ inputPlaceHolder, onChangeText,value })=>{  
    const {inputWrapper, InputStyle}=styles;
    return(
<View style={styles.container}>
    <Image
        source={require('../../assest/images/search-white.png')} //Change your icon image here
        style={styles.ImageStyle}
    />
    <TextInput style={styles.textInputStyle}
               placeholder={inputPlaceHolder}
               onChangeText={onChangeText}
               value={value}
               />
</View>
    )
}


const styles=StyleSheet.create({
inputWrapper:{
flexDirection:'row',
height:50,
width:'auto',
borderColor:'#E5E5E8',
borderBottomWidth:1,
alignItems:'center'
},
textStyle:{
flexGrow:1,
fontSize:17,
paddingLeft:20
},
InputStyle:{
flexGrow:2,
fontSize:17
},
ImageStyle: {
    padding: 10,
    marginLeft: 18,
    height: 5,
    width: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
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
textStyle:{
    color:'#d8d8d8',
    fontSize:18,
    justifyContent:'center',
    alignItems:'center',
     marginTop:35,
     marginLeft:13
},
});
export {SearchBox}