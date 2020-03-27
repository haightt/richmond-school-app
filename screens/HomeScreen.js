import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Richmond School District</Text>
            
                <Image style={styles.image} source={require('../images/rlogo.png')}></Image>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: Dimensions.get('window') < 600 ? 15 : 30
    },

    headerText: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').height < 600 ? 32 : 45,
        textAlign: 'center',
        textShadowColor: Colors.darkAccent,
        textShadowRadius: 5,
        color: Colors.accent,
        fontWeight: '800',
        margin: 15
    },

    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height < 600 ? 300 : 420,
        width: Dimensions.get('window').height < 600 ? 300 : 420,
        paddingVertical: 15
    },


});

export default HomeScreen;