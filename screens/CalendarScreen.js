import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RichHeader from '../components/RichHeader';
import { Agenda } from 'react-native-calendars';
import { Colors } from '../constants/Colors';



const CalendarScreen = props => {
    
    
    return (

        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='School Events' /></View>
            <View style={styles.calendarContainer}><Agenda minDate={Date.now}
                items={{ '2020-03-26': [{ name: 'item 1 - any js object' }] }}
                renderItem={(items) => { return <View><Text>{items.name}</Text></View> }}
                renderEmptyDate={() => { return (<View />) }}
                
                theme={{
                    selectedDayBackgroundColor: '#E1BC41',
                    selectedDayTextColor: '#382478',
                    dotColor: '#382478',
                    selectedDotColor: '#382478',
                    dayTextColor: '#4C1E52',
                    agendaDayTextColor: '#4C1E52',
                    agendaKnobColor: '#4C1E52',
                    agendaTodayColor: '#E1BC41',
                    agendaDayNumColor: '#7A5580'
                }}
            />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*         alignContent: 'center',
                justifyContent: 'center', */
    },
    calendarContainer: {
        flex:1,
        paddingBottom: 20
    }
});

export default CalendarScreen;