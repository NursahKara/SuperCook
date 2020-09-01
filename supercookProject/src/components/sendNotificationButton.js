import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';

const connection = signalr.hubConnection('http://192.168.43.250/NotificationWebService');
connection.logging = true;
const notificationHub = connection.createHubProxy('notificationHub');
notificationHub.on("ReceiveNotification", function (notification) {
    console.log(notification);
    PushNotification.localNotification({
        title: notification.title,
        message: notification.message,
        vibrate: true
    });
    notificationHub.invoke('DeleteNotifications')
        .fail(() => {
            console.warn('error when calling DeleteNotifications')
        })
});
BackgroundTask.define(() => {
    console.log('Hello from a background task');
    notificationHub.on("ReceiveNotification", function (notification) {
        console.log(notification);
        PushNotification.localNotification({
            title: notification.title,
            message: notification.message,
            vibrate: true
        });
        notificationHub.invoke('DeleteNotifications')
            .fail(() => {
                console.warn('error when calling DeleteNotifications')
            })
        BackgroundTask.finish();
    });
    connection.start().done(() => {
        console.log('Now connected, connection ID=' + connection.id);
    }).fail(() => {
        console.log('Failed');
    });
})
export default class SendNotification extends React.Component {
    componentDidMount() {
        BackgroundTask.schedule();
        console.disableYellowBox = true;
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
    }
    render() {
        return (
            <View style={{ marginTop: 100 }}>
                <Button onPress={() => {
                    console.log("send");
                }}
                    title="send" />
            </View>
        )
    }
}
