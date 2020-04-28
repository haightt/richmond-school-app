import React, {useState, useCallback, useEffect} from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { useSelector, useDispatch } from 'react-redux';

import RichHeader from '../components/RichHeader';
import Colors from '../constants/Colors';
import NoData from '../components/NoData';
import EmptyDay from '../components/EmptyDay';
import EventItem from '../components/EventItem';
import * as eventsActions from '../store/actions/events';

const CalendarScreen = props => {
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

    // useEffect(() => {
    //     const willFocusSub = props.navigation.addListener('willFocus', loadEvents);
    //     return () => {
    //         willFocusSub.remove();
    //     };
    // }, [loadEvents]);

    useEffect(() => {
        loadEvents();
    }, [loadEvents]);

    const events = useSelector(state => state.events.events)

    //Calculates the current time with adjustment for timezone for use in graying out calendar dates
    const date = new Date();
    const timeOffset = date.getTimezoneOffset() * 60000;
    const currentDate = Date.now() - timeOffset;

    if (error) {
        return <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Events' /></View>
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error.toString()} </Text>
                <Button title='Try Again' color={Colors.accent} onPress={loadEvents} />
            </View>
        </View>
    }

    if (isLoading) {
        return <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Events' /></View>
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.accent} />
            </View>
        </View>
    }
    return (

        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='School Events' /></View>
            <View style={styles.calendarContainer}><Agenda minDate={currentDate}
                items={events}
                renderItem={(items) => { return <EventItem title={items.title} time={items.time} description={items.description} /> }}
                renderEmptyDate={() => { return <EmptyDay text='No events' /> }}
                renderEmptyData={() => { return <NoData text='No events. Choose a different day!' /> }}

                theme={{
                    selectedDayBackgroundColor: Colors.accent, //accent
                    selectedDayTextColor: Colors.darkAccent, //dark accent
                    selectedDotColor: '#4C1E52', //dark accent 
                    dotColor: '#7A5580', //primary
                    todayTextColor: '#3500FF', //accent
                    dayTextColor: '#7A5580', //primary
                    agendaDayTextColor: '#4C1E52',
                    agendaKnobColor: '#4C1E52',
                    agendaTodayColor: '#3500FF',
                    agendaDayNumColor: '#7A5580',
                    textDayFontFamily: 'open-sans-bold',
                    textMonthFontFamily: 'open-sans-bold',
                    textDayHeaderFontFamily: 'open-sans'
                }}
            />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
        /*         alignContent: 'center',
                justifyContent: 'center', */
    },
    calendarContainer: {
        flex: 1,
        paddingVertical: 15
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

export default CalendarScreen;