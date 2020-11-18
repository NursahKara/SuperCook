import React, { Component } from 'react';
import Router from './src/router';
export default class App extends Component {

  componentDidMount() {
    // SplashScreen.hide(); //android/app/src/res/drawable/launch_screen.png
    console.disableYellowBox = true;
  }
  render() {
    return (
        <Router />
    )
  }
}