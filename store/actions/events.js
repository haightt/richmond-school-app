export const LOAD_EVENTS = 'LOAD_EVENTS';

export const loadEvents = () => {
    return async dispatch => {
        try {
            
            const response = await fetch('https://richmond-school-app.firebaseio.com/events.json');
            
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const eventData = await response.json();
            const newData = {};
            Object.keys(eventData).forEach(key => newData[key] = eventData[key])
            dispatch({type: LOAD_EVENTS, events: newData});
        } catch (err) {
            throw err;
        };
    };
};