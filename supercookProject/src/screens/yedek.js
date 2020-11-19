import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      data: [],
      dataSuccess: false,
      token: '',
      isLoading: false,

    };

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            )
          ])
      }
    ]);
    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3 - 50, 0],
      extrapolate: Extrapolate.CLAMP
    });
    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.RotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });
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
  render() {
    let { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={{ marginTop: height / 2.25 }}>
          <ActivityIndicator size="large" animating color="black" />
        </View>
      )
    }
    else {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              ...StyleSheet.absoluteFill,
              height: 2 * height / 3
            }}
          >
            <Image
              source={require('../../assest/images/bg-yaprak.jpg')}
              style={{ flex: 1, height: null, width: null }}
            />
          </View>
          <View style={{ height: height / 3, justifyContent: 'center' }}>
            {/* <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
            </Animated.View>
            </TapGestureHandler> */}
            <Animated.View
              style={{
                //   zIndex:this.textInputZindex,
                //   opacity:this.textInputOpacity,
                //   transform:[{translateY:this.textInputY}],
                ...StyleSheet.absoluteFill,
                height: height / 3,
                top: null, justifyContent: 'center',
                backgroundColor: 'white'
              }}
            >
              <TapGestureHandler onHandlerStateChange={this.onCloseState} >
                <Animated.View style={styles.closeButton}>
                  {/* <Animated.Text style={{fontSize:15,marginLeft:width/2,marginTop:-15,transform:[{rotate:concat(this.RotateCross, 'deg')}]}}> */}
                  <Image
                    source={require('../../assest/images/user.png')}
                    style={{  marginLeft: width / 2 - 30, marginTop: -40 }} />
                  {/* </Animated.Text> */}
                </Animated.View>
              </TapGestureHandler>
              <TextInput
                placeholder='USERNAME'
                style={styles.textInput}
                placeholderTextColor='gray'
                underlineColorAndroid='transparent'
                onChangeText={valuee =>
                  this.setState({ username: valuee })
                }
              />
              <TextInput
                placeholder="PASSWORD"
                style={styles.textInput}
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={valuee =>
                  this.setState({ password: valuee })
                }
              />
              <TouchableOpacity style={styles.button} onPress={this.onLoginBtnPress.bind(this)}>
                {/* onPress={this.onLoginBtnPress.bind(this)}  */}
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>

              </TouchableOpacity>

            </Animated.View>

          </View>
        </View>
      );
    }
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 0.2
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 15,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  closeBotton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    fontSize: 15,
  }
});