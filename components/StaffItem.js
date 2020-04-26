import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors'

const StaffItem = props => {
    return (
        <View style={styles.card}>
            
                <Text style={styles.nameText}>{props.first} {props.last}</Text>
                <Text style={styles.importantText}>{props.title}</Text>
                <Text style={styles.importantText}>Phone number: <Text style={styles.detailText}>262-538-1360 Ext. {props.ext}</Text> </Text>
                <Text style={styles.importantText}>Email Adress: <Text style={styles.detailText}>{props.email}</Text></Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderColor: Colors.darkAccent,
        borderRadius: 10,
        borderWidth: 1.5,
        elevation: 2,
        shadowColor: Colors.darkAccent,
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.5,
        shadowRadius:  5,
        marginVertical: 7,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    nameText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'left',
        color: Colors.darkAccent,
        marginBottom: 2
    },
    detailText: {
        fontFamily: 'open-sans',
        color: Colors.darkerAccent,
        fontSize: 14
    },
    importantText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: Colors.darkAccent,
        textAlign: 'left',
        marginHorizontal: 10,
        marginVertical: 2
    }

});

export default StaffItem;