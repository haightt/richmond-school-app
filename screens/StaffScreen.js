import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Platform } from 'react-native';
import RichHeader from '../components/RichHeader'
import StaffItem from '../components/StaffItem';
import STAFF from '../data/dummy-data';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';



const StaffScreen = props => {

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Staff Directory' /></View>
            <View style={styles.search}>
                <TextInput style={styles.textInput} />
                <Ionicons name={Platform.OS === 'android' ? 'md-search' : 'ios-search'} size={35} color={Colors.accent} />
            </View>
            <FlatList
                data={STAFF}
                keyExtractor={item => item.id}
                renderItem={
                    itemData => (
                        <StaffItem
                            first={itemData.item.firstName}
                            last={itemData.item.lastName}
                            title={itemData.item.jobTitle}
                            ext={itemData.item.extension}
                            email={itemData.item.emailAddress}
                        />
                    )
                } />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 40,
        width: '90%'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        backgroundColor: 'white', 
        paddingRight: 10,
        borderBottomColor: Colors.darkerAccent,
        borderBottomWidth: 1,    
    }
});

export default StaffScreen;