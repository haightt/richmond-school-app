import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const NavButton = props => {

    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={props.imagePath} />
            </View>
            <Text style={styles.buttonText}>
                {props.buttonName}
            </Text>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({

    buttonText: {
        fontSize: 14,
        color: Colors.darkAccent,
        textAlign: 'center',
        fontWeight: '700',
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,

    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }

});

export default NavButton;