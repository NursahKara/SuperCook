import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      typing_email: false,
      typing_password: false,
      animation_login : new Animated.Value(width-40),
      enable:true,
      username: '',
      password: '',
      data: [],
      dataSuccess: false,
      token: '',
      isLoading: false,
    }
  }

  _foucus(value){
    if(value=="email"){
      this.setState({
        typing_email: true,
        typing_password: false
      })
    }
    else{
      this.setState({
        typing_email: false,
        typing_password: true
      })
    }
  }

  _typing(){
    return(
      <TypingAnimation 
        dotColor="#93278f"
        style={{marginRight:25}}
      />
    )
  }

  _animation(){
    Animated.timing(
      this.state.animation_login,
      {
        toValue: 40,
        duration: 250
      }
    ).start();

    setTimeout(() => {
      this.setState({
        enable:false,
        typing_email: false,
        typing_password: false
      })
    }, 150);
  }
  onLoginBtnPress = () => {
    const data = new URLSearchParams();
    data.append("Username", "IFSAPP");
    data.append("Password", "ifsapp");
    
    fetch('http://192.168.41.182/IfsTerminalService/Token/Login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      //body:"{'Username':'IFSAPP', 'Password':'ifsapp'}"
      //body: 'Username=' + this.state.username + '&Password=' + this.state.password
      body: 'Username=' + this.state.username + '&Password=' + this.state.password
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ token: responseJson.token });
        console.log(this.state.token);
      })
    // .catch((error) => console.error(error));
    const { token } = this.state;
    if (token === "") {
      console.log("Token boş:::", token)
      console.log("username:", this.state.username)
      console.log("pass:", this.state.password)
    }
    else if (token === undefined) {
      console.log("Token undefined:::", token)
      {
        alert("Kullanıcı doğrulanamadı");
      }
    }
    else if (token === null) {
      console.log("Token null:::", token)
      {
        alert("Kullanıcı doğrulanamadı");
      }
    }
    else {
      console.log("Token dolu:::", token)
      this.setState({ isLoading: true });
      Actions.homee({ token: token });
    
    }
  }
  render(){
    const width = this.state.animation_login;
    let { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={{ marginTop: height / 2.25 }}>
          <ActivityIndicator size="large" animating color="black" />
        </View>
      )
    }
    else {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.header}>
              <ImageBackground
                source={require("../../assest/images/hdr.png")}
                style={styles.imageBackground}
              >
                <Text style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:30
                }}>HOŞGELDİNİZ</Text>
                <Text style={{
                  color:'yellow'
                }}>Devam etmek için giriş yapın.</Text>

              </ImageBackground>
          </View>
          <View style={styles.footer}>
                <Text style={[styles.title,{
                  marginTop:50
                }]}>Kullanıcı Adı</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Kullanıcı Adınız.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("email")}
                      onChangeText={valuee =>
                        this.setState({ username: valuee })
                      }
                    />
                    {this.state.typing_email ?
                      this._typing()
                    : null}
                </View>

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Şifre</Text>
                <View style={styles.action}>
                    <TextInput 
                      secureTextEntry
                      placeholder="Şifreniz.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("password")}
                      onChangeText={valuee =>
                        this.setState({ password: valuee })
                      }
                    />
                    {this.state.typing_password ?
                      this._typing()
                    : null}
                </View>
                
                <TouchableOpacity
                  onPress={this.onLoginBtnPress.bind(this)}>
                  <View style={styles.button_container}>
                        <Animated.View style={[styles.animation,{
                          width
                        }]}>
                          {this.state.enable ?
                            <Text style={styles.textLogin}>Giriş</Text>
                            :
                            <Animatable.View
                            animation="bounceIn"
                            delay={50}>
                              <FontAwesome 
                                name="check"
                                color="white"
                                size={20}
                              />
                            </Animatable.View>
                          }
                        </Animated.View >
                  </View>
                </TouchableOpacity>

              
          </View>
      </View>
    )
  }
}
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center'
  },
  header: {
    flex:1,
  },
  footer: {
    flex:2,
    padding:20
  },
  imageBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:'100%'
  },
  title: {
    color:'black',
    fontWeight:'bold'
  },
  action: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2'
  },
  textInput: {
    flex:1,
    marginTop:5,
    paddingBottom:5,
    color:'gray'
  },
  button_container: {
    alignItems: 'center',
    justifyContent:'center'
  },
  animation: {
    backgroundColor:'#93278f',
    paddingVertical:10,
    marginTop:30,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  textLogin: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  signUp: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20
  }
});