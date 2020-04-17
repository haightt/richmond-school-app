import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RichHeader from '../components/RichHeader';
import { Agenda } from 'react-native-calendars';
import Colors from '../constants/Colors';


const LunchScreen = props => {
    
    const date = new Date();
    const timeOffset = date.getTimezoneOffset() * 60000;
    const currentDate = Date.now()-timeOffset;
    
    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Lunch' /></View>
            <View style={styles.calendarContainer}><Agenda minDate={currentDate}
                items={{ '2020-03-27': [{ name: 'item 3 - js object' }],
                    '2020-03-27': [{ name: 'item 1 - any js object' }],
                    '2020-03-28': [{ name: 'item 2 - any js object' }],
                    '2020-03-29': []}}
                renderItem={(items) => { return <View><Text>{items.name}</Text></View> }}
                renderEmptyDate={() => { return (<View />) }}
                
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
                    textDayFontFamily: 'open-sans',
                    textMonthFontFamily: 'open-sans-bold',
                    textDayHeaderFontFamily: 'open-sans-bold'
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
        flex:1,
        paddingVertical: 15
    }
});

export default LunchScreen;