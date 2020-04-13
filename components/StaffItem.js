import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors'

const StaffItem = props => {
    return (
        <View style={styles.card}>
            
                <Text style={styles.nameText}>{props.first} {props.last}</Text>
                <Text style={styles.detailText}>{props.title}</Text>
                <Text style={styles.detailText}>Phone number: 262-538-1360 Ext. {props.ext}</Text>
                <Text style={styles.detailText}>Email Adress: {props.email}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderColor: Colors.primary,
        borderRadius: 10,
        borderWidth: 2,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.26,
        shadowRadius:  5,
        marginVertical: 10,
        marginHorizontal: 15
    },
    name: {
        flexDirection: 'row',
    },
    detailContainer: {
        justifyContent: 'space-around',
        padding: 5
    },

    nameText: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: 'left',
        marginHorizontal: 10,
        marginTop: 10,
        color: Colors.darkAccent
    },
    detailText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: Colors.darkerAccent,
        textAlign: 'left',
        marginHorizontal: 10,
        marginVertical: 5
    }

});

export default StaffItem;