import React, { Component } from 'react';
import { StyleSheet, View, Text ,SafeAreaView,TouchableOpacity,Modal,Linking,FlatList,Image,ActivityIndicator} from 'react-native';
import CustomHeader from './CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner'; 
import { Actions } from 'react-native-router-flux';

export default class StockQueryScreen extends Component {
  constructor(props) {
   
    super(props);
    console.log('1111111111',this.props.token)
    this.state = {
    modalVisible:false,
    code:'',
    isLoading: true,
    data: [],
    tok:''
    }
    };
    
  ifScaned=e=>{
    alert(e.data);
    this.setState({code:e.data,isLoading:false})
    this.setState({modalVisible:false})
    this.getData(e.data);
  }
  getData = (barcode) => {
 
    console.log("tokeeeeeeeeeeennnnnnnnnnn::::::::::::",this.props.token);
  fetch('http://192.168.41.182/IfsTerminalService/Data/InventoryPartByBarcodeId/'+barcode, {
      method: 'GET',
      headers: new Headers({
         'Authorization': 'Bearer'+ ' ' +this.props.token,
      }), 
    })
      .then((response) => response.json()
      
     )
    //  .then(data => console.log(data[0].contract))
     
      .then((responsejson) => {
        this.setState({
          isLoading: false,
          data: responsejson,
        })
      })
      .catch((error) => console.error(error));
    console.log('::::::::::::::',this.state.data)
    if (this.props.token === "") {
      console.log("Token boş:::", this.props.token)
    }
    else if (this.props.token === null) {
    
      {
        alert("Kullanıcı doğrulanamadı");
      }
    }
    else {
      console.log("Token dolu:::", this.props.token)
    }
}

  render() {
    let { isLoading, data } = this.state;
    return (
      <SafeAreaView>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={()=>{
        this.setState({modalVisible:false});
        }}
        >
          <View>
             <QRCodeScanner
                containerStyle={{backgroundColor:'#fff'}}
                onRead={this.ifScaned.bind(this)}
                reactivate={true}
                style={{flex:1,marginTop:'auto'}}
                cameraProps={{ratio:'16:9'}}
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

        </Modal>
         <CustomHeader isHome={false} title="Stok Görüntüleme"/>
         <View style={{height:'auto',marginBottom:'auto'}}>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:30,marginBottom:20}}>
             {/* <TouchableOpacity onPress={()=>{this.setState({modalVisible:true})}} ><Text>tıkla</Text></TouchableOpacity> */}
                <Button 
                onPress={()=>{this.setState({modalVisible:true})}}
                style={{width:120,height:120,backgroundColor:'#FAFAFA',alignItems:'center',justifyContent:'center',  shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 1,
                shadowRadius: 3.84,
                elevation: 10,}}
                icon={({ size, color, direction }) => (
                <Image
                  source={require('../../assest/images/barcode-scan-128.png')}
                  style={[
                    {
                      transform: [{ scaleX: direction === 'rtl' ? -1 : 1 }],
                    },
                    {
                      width: 35,
                      height: 35,
                      tintColor: 'black',
                    }
                  ]}
                />
              )}>
            </Button>
             </View>
             <View style={{height:'auto',marginBottom:'auto'}}>
             {/* {this.state.isLoading ? */}
             <FlatList
                    data={data}
                    keyExtractor={(id) => id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>SİTE:</Text>
                            <Text style={{ fontSize: 12, alignItems:'flex-end',flex:7}}>{item.contract}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>PART NO:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7 }}>{item.partNo}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>AMBAR:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7 }}>{item.warehouse}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>LOKASYON NO:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7}}>{item.locationNo}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>LOT NO:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7 }}>{item.lotBatchNo}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>MİKTAR:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7 }}>{item.qtyOnHand}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>SON KULLANMA TARİHİ:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7 }}>{item.expirationDate}</Text>
                          </View>

                          <View style={styles.seperator}/>

                          <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{ fontSize: 12, alignItems:'flex-start',flex:5}}>ESKİ KODU:</Text>
                            <Text style={{ fontSize: 12,alignItems:'flex-end',flex:7 }}>{item.oldNo}</Text>
                          </View>
                        </View>
                    )}
                  />
                  {/* :<ActivityIndicator size="small" color="#731873" style={{ marginTop: 200 }} />} */}
             </View>
                 
              </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
card:{
  opacity: 0.9,
  backgroundColor: 'white',
  height: 'auto',
  flex: 4,
  margin: 8,
  // alignItems: 'center',
  // justifyContent: 'center',
  borderRadius: 15,
  borderColor: 'gray',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 3.84,
  elevation: 10,
  padding:20
},
seperator:{
  height: 0.5, 
  backgroundColor: "#DCDCDC",
  marginTop:3,
  marginBottom:3
}
});