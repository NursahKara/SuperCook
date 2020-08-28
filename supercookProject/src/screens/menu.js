
import * as React from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity,ImageBackground,StyleSheet,ScrollView,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {SearchBox} from '../components/searchbox';
import CustomHeader from './CustomHeader';
import Card from '../components/card';
const { width, height } = Dimensions.get("screen");
export default class MenuScreen extends React.Component{
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
                  <Text style={styles.textStyle}>Dolapta Ne Var?</Text>
                </View>
                <View style={{alignItems:'flex-start',justifyContent:'center',marginTop:'12%',flex:1}}>
                  <Icon name="user-circle" size={25} color="white" />
                </View>
              </View>
              <View style={styles.Search}>
              <SearchBox inputPlaceHolder='Ara...'/>   
              </View>
              <View style={styles.body}>
                <ScrollView>
                <View style={{marginLeft:23,marginTop:3,marginRight:23}}>
                  <ScrollView horizontal={true}>
                    <TouchableOpacity style={styles.topCardDesign}>
                      <Text>video only</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('RecentReleases')}>   
                      <Text>key ingredient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('MostRead')}>
                      <Text>meal type</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                      <Text>diet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                      <Text>cuisines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                      <Text>max ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                      <Text>rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                      <Text>resipe time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCardDesign}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                      <Text>nutritional</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
                <View style={{marginLeft:23,marginTop:20,marginRight:23,marginBottom:20,height:100}}>
                   <TouchableOpacity style={styles.smallCardDesign}>
                            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
                                <Image source={require('../../assest/images/party.png')} style={styles.smallCardImage} />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'center',alignItems:'center', flex: 4, marginBottom: 5, marginTop: 5 }}>
                                <Text style={styles.title1Style}>You can make</Text>
                                <Text style={styles.title2Style}>398</Text>
                                <Text style={styles.title3Style}>resipes with your 10 ingredients</Text>
                            </View>
                            <View style={{
                                            alignItems: 'flex-end',
                                            marginRight: 10,
                                            justifyContent: 'center',
                                            flex: 2
                                        }}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={{alignItems:'flex-start',marginRight:5,justifyContent:'center',opacity:0.5}}>see all</Text>
                                <Icon
                                    name='chevron-right'
                                    size={20}
                                    style={{alignItems:'flex-end',opacity:0.5}}
                                />
                                </View>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,marginLeft:23}}>
                  <Text style={{fontSize:16}}>Featured Recipes</Text>
                    <ScrollView horizontal={true}>
                          <TouchableOpacity style={styles.cardDesign}>
                            <Image source={require('../../assest/cooks/soup.jpg')} style={styles.cardImage}/>
                            <Text style={{fontSize:16,marginTop:5}}>How to Make Clarified Butter</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.cardDesign}>
                            <Image source={require('../../assest/cooks/soup.jpg')} style={styles.cardImage}/>
                            <Text style={{fontSize:16,marginTop:5}}>How to Make Clarified Butter</Text>
                          </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{marginTop:20,marginLeft:23,marginBottom:10}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16,alignItems:'flex-start',flex:4}}>Featured Recipes</Text>
                    <View style={{alignItems:'flex-end',flex:2}}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{alignItems:'flex-start',fontSize:16,marginRight:5,color:'#4CAF50'}}>View All</Text>
                        <Icon
                                      name='chevron-right'
                                      size={20}
                                      color='#4CAF50'
                                      style={{alignItems:'flex-end',marginRight:5}}
                                  />
                    </View>
                  </View>
                  </View>
                  <ScrollView horizontal={true}>
                        <TouchableOpacity style={styles.cardDesignSmall} onPress={()=>this.props.navigation.navigate('')}>
                          <Image source={require('../../assest/cooks/soup.jpg')} style={{width:140,height:200}}/>
                          <Text style={{fontSize:16,marginTop:5}}>How to Make Clarified Butter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardDesignSmall}>
                          <Image source={require('../../assest/cooks/soup.jpg')} style={{width:140,height:200}}/>
                          <Text style={{fontSize:16,marginTop:5}}>How to Make Clarified Butter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardDesignSmall}>
                          <Image source={require('../../assest/cooks/soup.jpg')} style={{width:140,height:200}}/>
                          <Text style={{fontSize:16,marginTop:5}}>How to Make Clarified Butter</Text>
                        </TouchableOpacity>
                  </ScrollView>
                </View>
                </ScrollView>
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
    height:'auto',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    
   },
   imageView: {
    width: 20,
    height: 20,
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
  smallCardImage: {
  width: 55,
  height: 55,
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
  marginRight:10,
  marginTop:5,
  borderRadius:5
},



})