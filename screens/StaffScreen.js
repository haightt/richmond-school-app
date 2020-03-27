import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RichHeader from '../components/RichHeader'


const StaffScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{alignSelf: 'flex-start'}}><RichHeader title='Staff Directory' /></View>
            <Text style={{textAlign: 'center'}}>This is a staff!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default StaffScreen;