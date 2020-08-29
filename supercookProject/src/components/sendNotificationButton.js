import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';

const connection = signalr.hubConnection('http://192.168.43.250/NotificationWebService');
connection.logging = true;
const notificationHub = connection.createHubProxy('notificationHub');
notificationHub.on("ReceiveNotification", function (notification) {
    console.log(notification);
    PushNotification.localNotification({
        title: notification,
        body: notification,
        vibrate: true
    });
});
export default class SendNotification extends React.Component {
    componentDidMount() {
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
