import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Button } from 'react-native';
import RichHeader from '../components/RichHeader';
import { Agenda } from 'react-native-calendars';
import Colors from '../constants/Colors';
import LunchChoices from '../components/LunchChoices';
import EmptyDay from '../components/EmptyDay';
import * as lunchActions from '../store/actions/lunch';
import { useSelector, useDispatch } from 'react-redux';
import NoData from '../components/NoData';

const LunchScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const loadLunch = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(lunchActions.loadLunch());

        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError])

    // useEffect(() => {
    //     const willFocusSub = props.navigation.addListener('willFocus', loadLunch);
    //     return () => {
    //         willFocusSub.remove();
    //     };
    // }, [loadLunch]);

    useEffect(() => {
        loadLunch();
    }, [loadLunch]);

    const lunches = useSelector(state => state.lunch.lunches)

    const date = new Date();
    const timeOffset = date.getTimezoneOffset() * 60000;
    const currentDate = Date.now() - timeOffset;

    if (error) {
        return <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Lunch' /></View>
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error.toString()} </Text>
                <Button title='Try Again' color={Colors.accent} onPress={loadLunch} />
            </View>
        </View>
    }

    if (isLoading) {
        return <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Lunch' /></View>
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.accent} />
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}><RichHeader title='Lunch' /></View>
            <View style={styles.calendarContainer}><Agenda
                minDate={currentDate}
                items={lunches}
                renderItem={(items) => {
                    return <LunchChoices
                        choice={items.choice}
                        side1={items.side1}
                        side2={items.side2}
                        side3={items.side3} />
                }}
                renderEmptyDate={() => { return <EmptyDay text='No lunch served' /> }}
                renderEmptyData={() => { return <NoData text='No lunch. Choose a different day!' /> }}
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
                    textDayHeaderFontFamily: 'open-sans',

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
    item: {
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
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

export default LunchScreen;