import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RichHeader from '../components/RichHeader';


const LunchScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{alignSelf: 'flex-start'}}><RichHeader title='Lunches' /></View>
            <Text style={{textAlign: 'center'}}>This is a lunch!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LunchScreen;