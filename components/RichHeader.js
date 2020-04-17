import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../constants/Colors';

const RichHeader = props => {
return (<View style={styles.container}>
    <Image source={require('../images/richlogo.png')} style={styles.image}></Image>
    <Text style={styles.text}>{props.title}</Text>
</View>
);
};

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        paddingTop: Dimensions.get('window').height >= 740 ? (Platform.OS === 'android' ? 60 : 40) : 30,
        paddingBottom: 10,
        paddingHorizontal: 5,
        backgroundColor: Colors.accent,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    image: {
        height: Dimensions.get('window').height >= 600 ? 60 : 40,
        width: Dimensions.get('window').height >= 600 ? 147 : 98
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').width >= 400 ? (Platform.OS === 'android' ? 30 : 25) : 24,
        textAlign: 'right',
        color: Colors.darkerAccent,
        paddingEnd: 3
    }
});

export default RichHeader;