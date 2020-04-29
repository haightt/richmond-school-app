import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as eventsActions from '../store/actions/events';

const HomeScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const loadEvents = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(eventsActions.loadEvents());

        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError])

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadEvents);
        return () => {
            willFocusSub.remove();
        };
    }, [loadEvents]);

    useEffect(() => {
        loadEvents();
    }, [loadEvents]);

    const events = useSelector(state => state.events.events)

    //Calculates the current time with adjustment for timezone for use in graying out calendar dates

    const date = new Date();
    const timeOffset = date.getTimezoneOffset() * 60000;
    const timestamp = Date.now() - timeOffset;
    const currentDate = new Date(Date.now() - timeOffset);
    var year = currentDate.getFullYear();
    var month = '0' + (currentDate.getMonth() + 1);
    var day = '0' + currentDate.getDate();
    const formattedDate = year + '-' + month.substr(-2) + '-' + day.substr(-2);

    let eventlist = [];
    let nextEvent = {};

    const findNextEvent = (data) => {
        Object.keys(data).forEach(key => {
            if (key >= formattedDate) {
                for (let i = 0; i < data[key].length; i++) {
                    eventlist.push(data[key][i]);
                };
            }
        })
        for (let i = 0; i < eventlist.length; i++) {
            if (eventlist[i].timestamp >= timestamp) {
                nextEvent = eventlist[i];
                break;
            }
        };
    };


    findNextEvent(events);
    

    if (error) {
        return <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error.toString()} </Text>
                <Button title='Try Again' color={Colors.accent} onPress={loadEvents} />
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Richmond School District</Text>
            <Image style={styles.image} source={require('../images/rlogo.png')}></Image>
            {isLoading ? (<ActivityIndicator size='small' color={Colors.accent} />) :
            (
                <Text style={styles.upNextText} numberOfLines={3}>The next upcoming event is:
                <Text style={styles.eventText}>{'\n'}{nextEvent.title}</Text>
                <Text style={styles.timeText}>{'\n'}{nextEvent.time}</Text>
            </Text>
            )}
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