import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';

BackgroundTask.define(() => {
  console.log('Hello from a background task');
  PushNotification.localNotification({
    title: "notification",
    message: "Hello from a background task",
});
  BackgroundTask.finish();
})
const connection = signalr.hubConnection('http://192.168.43.250/NotificationWebService');
connection.logging = true;
const notificationHub = connection.createHubProxy('notificationHub');
notificationHub.on("ReceiveNotification", function (notification) {
    console.log(notification);
    PushNotification.localNotification({
        title: notification,
        message: notification,
        vibrate: true
    });
});
export default class SendNotification extends React.Component {
    componentDidMount() {
    BackgroundTask.schedule();
    console.disableYellowBox = true;
    connection.start().done(() => {
        console.log('Now connected, connection ID=' + connection.id);
    }).fail(() => {
        console.log('Failed');
    });
}
    render() {
        return (
            <View style={{marginTop:100}}>
                <Button onPress={()=>{
                    notificationHub.invoke('SendNotification')
                    .fail(() => {
                        console.warn('error when calling SendNotification')
                    })
                }}
                title="send"/>
            </View>
        )
    }
}
