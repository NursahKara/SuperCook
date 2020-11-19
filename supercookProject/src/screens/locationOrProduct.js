import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView ,Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomHeader from './CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const {  width,height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();
export default class LocationOrProductScreen extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <SafeAreaView>
                <ImageBackground
                    source={require("../../assest/images/header.png")}
                    style={{ width: width, height: "100%" }}
                >
                    <CustomHeader isHome={false} title="Ambardaki Boş Lokasyonlar" />
                    <View style={{ paddingHorizontal: 20, marginTop: '5%'}}>
                        <View style={{ margin: 'auto' }}>
                            <View style={{ flex: 1,marginTop: 10 }}>
                                <View
                                    style={{
                                        backgroundColor: "#FAFAFA",
                                        height: 180,
                                        width: 150,
                                        borderRadius: 15,
                                        borderColor:'darkblue',
                                        shadowOffset: {
                                            width: 0,
                                            height: 5,
                                          },
                                          shadowOpacity: 1,
                                          shadowRadius: 3.84,
                                          elevation: 5,
                                        marginRight: 10,
                                        marginTop: 20,
                                    }}
                                >
                                    <TouchableOpacity onPress={() => Actions.stockQuery({ token: this.props.token })} style={{alignSelf:'flex-start'}}>
                                        <View style={{ height: 130, width: 140, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                source={require("../../assest/images/dolu-bos.png")}
                                                style={{ width: 80, borderRadius: 10, height: 80 }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                width: 150,
                                                alignItems: "center",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    paddingHorizontal: 10,
                                                    paddingVertical: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginLeft:'auto',
                                                    marginRight:'auto'
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontFamily: "RobotoRegular",
                                                        fontSize: 12,
                                                        color: "#872990",
                                                        alignItems: 'center',
                                                        textAlign:'center'
                                                      
                                                    }}
                                                >
                                                    MALZEME BARKODU OKUT
                                            </Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: "#FAFAFA",
                                        height: 180,
                                        width: 150,
                                        borderRadius: 15,
                                        padding: 5,
                                        shadowOffset: {
                                            width: 0,
                                            height: 5,
                                          },
                                          shadowOpacity: 1,
                                          shadowRadius: 3.84,
                                          elevation: 5,
                                        marginRight: 5,
                                        marginTop: 20,
                                        alignSelf: 'flex-end'
                                    }}
                                >
                                    <TouchableOpacity onPress={() => Actions.emptyLocation({ token: this.props.token })} style={{alignSelf:'flex-end'}}>
                                        <View style={{ height: 130, width: 150, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                source={require("../../assest/images/boxes.png")}
                                                style={{ width: 80, borderRadius: 10, height: 80 }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                width: 150,
                                                alignItems: "center",
                                            }}
                                        >
                                            <View
                                                style={{
                                                    paddingHorizontal: 15,
                                                    paddingVertical: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginLeft:'auto',
                                                    marginRight:'auto'
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontFamily: "RobotoRegular",
                                                        fontSize: 12,
                                                        color: "#872990",
                                                        alignItems: 'center',
                                                        textAlign:'center'
                                                    }}
                                                >
                                                   LOKASYON BARKODU OKUT
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </ImageBackground>

            </SafeAreaView>

        );
    }
}

