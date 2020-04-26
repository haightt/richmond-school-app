import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';

import RichHeader from '../components/RichHeader';
import Colors from '../constants/Colors';
import NoData from '../components/NoData';
import EmptyDay from '../components/EmptyDay';
import EventItem from '../components/EventItem';


const CalendarScreen = props => {

    //Calculates the current time with adjustment for timezone for use in graying out calendar dates
    const date = new Date();
    const timeOffset = date.getTimezoneOffset() * 60000;
    const currentDate = Date.now() - timeOffset;

    return (

        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='School Events' /></View>
            <View style={styles.calendarContainer}><Agenda minDate={currentDate}
                items={{
                    '2020-04-27': [{
                        'title': 'Young Rembrandts',
                        'time': '3:25 PM - 4:35 PM',
                        'description': 'Located in the Art Room'
                    }]
                }}
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
    }
});

export default CalendarScreen;