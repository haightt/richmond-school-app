import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const EventItem = props => {
    return <View style={styles.eventContainer} >
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.detail}><Text style={styles.highlight}>Time: </Text>{props.time}</Text>
        <Text style={styles.description}>{props.description}</Text>
    </View>
};

const styles = StyleSheet.create({
    eventContainer:{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderColor: Colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 10,
        marginVertical: 5,
        padding: 5,
        elevation: 2,
        shadowColor: Colors.darkAccent,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 5
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: Colors.darkAccent
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.darkAccent
    },
    detail: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: Colors.darkerAccent
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 12,
        color: Colors.darkerAccent
    }

});

export default EventItem;
