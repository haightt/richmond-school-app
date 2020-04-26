import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const LunchChoices = props => {
    return (
        <View style={styles.lunchContainer}>
            <Text numberOfLines={2} style={styles.choiceText}>{props.choice}</Text>
            <Text style={styles.sideText}>{props.side1}</Text>
            <Text style={styles.sideText}>{props.side2}</Text>
            <Text style={styles.sideText}>{props.side3}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    lunchContainer: {
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
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.26,
        shadowRadius:  5
    },
    choiceText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: Colors.darkerAccent,
    },
    sideText: {
        fontSize: 14,
        fontFamily: 'open-sans',
        color: Colors.darkerAccent
    }
});

export default LunchChoices;
