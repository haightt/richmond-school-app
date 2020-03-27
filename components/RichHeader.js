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
        paddingTop: Dimensions.get('window').height >= 600 ? (Platform.OS === 'android' ? 60 : 40) : 30,
        paddingBottom: 10,
        paddingHorizontal: 5,
        backgroundColor: Colors.accent,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    image: {
        height: Dimensions.get('window').height >= 600 ? 60 : 40,
        width: Dimensions.get('window').height >= 600 ? 147 : 98
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').height >= 600 ? (Platform.OS === 'android' ? 34 : 29) : 28,
        textAlign: 'right',
        color: Colors.darkerAccent
    }
});

export default RichHeader;