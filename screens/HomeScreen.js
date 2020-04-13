import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Richmond School District</Text>
            <Image style={styles.image} source={require('../images/rlogo.png')}></Image>
            <Text style={styles.upNextText} numberOfLines={3}>The next upcoming event is:
            <Text style={styles.eventText}>{'\n'}placeholder event</Text>
                <Text style={styles.timeText}>{'\n'}Time</Text>
            </Text>
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
        fontSize: Dimensions.get('window').height < 600 ? 32 : 43,
        textAlign: 'center',
        textShadowColor: Colors.darkAccent,
        textShadowRadius: 2,
        color: Colors.accent,
        fontWeight: '800',
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 5
    },

    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height < 750 ? (Dimensions.get('window').height < 670 ? 300 : 350) : 420,
        width: Dimensions.get('window').height < 750 ? (Dimensions.get('window').height < 670 ? 300 : 350) : 420,
        paddingVertical: 10
    },

    upNextText: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 2
    },

    eventText: {
        textTransform: 'uppercase',
        color: Colors.accent,
        fontSize: Dimensions.get('window').height < 600 ? 18 : 24,
    },

    timeText: {
        color: Colors.accent,
        fontSize: Dimensions.get('window').height < 600 ? 16 : 22
    }


});

export default HomeScreen;