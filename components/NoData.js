import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors'

const NoData = props => {
    return <View style={styles.container}><Text style={styles.text}>{props.text}</Text></View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 20,
        color: Colors.darkAccent
    }
});

export default NoData;