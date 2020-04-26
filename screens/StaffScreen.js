import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, FlatList, TextInput, Platform, ActivityIndicator, Button, Text } from 'react-native';
import RichHeader from '../components/RichHeader'
import StaffItem from '../components/StaffItem';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import * as staffActions from '../store/actions/staff';




const StaffScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const staff = useSelector(state => state.staff.staffMembers);
    const dispatch = useDispatch();
    const [isSearched, setIsSearched] = useState(false);

    const loadStaff = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(staffActions.loadStaff());

        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadStaff);
        return () => {
            willFocusSub.remove();
        };
    }, [loadStaff]);

    useEffect(() => {
        loadStaff();
        setData(staff);
    }, []);

    const [data, setData] = useState(staff);
    const textChangeHandler = event => {
        setSearchTerm(event);
        setIsSearched(true);
    }

    useEffect(() => {
        const searchItem = searchTerm;
        const results = staff.filter(staffMember => staffMember.firstName.includes(searchItem)
            || staffMember.lastName.includes(searchItem)
            || staffMember.jobTitle.includes(searchItem));
        setData(results)
    }, [searchTerm]);


    if (error) {
        return <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Staff Directory' /></View>
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error.toString()} </Text>
                <Button title='Try Again' color={Colors.accent} onPress={loadStaff} />
            </View>
        </View>
    }

    if (isLoading) {
        return <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Staff Directory' /></View>
            <View style={styles.search}>
                <TextInput style={styles.textInput} />
                <Ionicons name={Platform.OS === 'android' ? 'md-search' : 'ios-search'} size={35} color={Colors.darkerAccent} />
            </View>
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.accent} />
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Staff Directory' /></View>
            <View style={styles.search}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={textChangeHandler}
                    value={searchTerm}
                />
                <Ionicons name={Platform.OS === 'android' ? 'md-search' : 'ios-search'} size={35} color={Colors.darkerAccent} />
            </View>
            {isSearched ?
                <FlatList
                    data={data}
                    keyExtractor={item => item.emailAddress}
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
                : <FlatList
                    data={staff}
                    keyExtractor={item => item.emailAddress}
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
                }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 30,
        width: '90%',
        fontSize: 24,
        paddingLeft: 20,
        color: Colors.darkerAccent
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        backgroundColor: 'white',
        paddingRight: 10,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 1,
        borderTopColor: Colors.accent,
        borderTopWidth: 1,
        marginVertical: 10
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: Colors.accent,
        textDecorationColor: Colors.darkerAccent
    }
});

export default StaffScreen;