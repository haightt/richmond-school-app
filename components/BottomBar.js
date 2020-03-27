import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'
import NavButton from '../components/NavButton'

const BottomBar = props => {
    return (
        <View style={styles.bottomBar}>
            <NavButton imagePath={require('../images/home.png')} buttonName='HOME' />
            <NavButton imagePath={require('../images/lunch.png')} buttonName='LUNCH' />
            <NavButton imagePath={require('../images/calendar.png')} buttonName='EVENTS' />
            <NavButton imagePath={require('../images/staff.png')} buttonName='STAFF' />
        </View>
    )
};

const styles = StyleSheet.create({

    bottomBar: {
        height: '17%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.accent,
        flexDirection: "row",
        alignItems: 'center'
    },

})

export default BottomBar;