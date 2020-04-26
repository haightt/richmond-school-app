import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyDay = props => {
    return (
        <View style={styles.emptyDay}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyDay: {
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flex: 1,
        paddingBottom: 10,
        justifyContent: 'center',
        marginRight: 10
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#ccc'
    }
});

export default EmptyDay;