export const LOAD_LUNCH = 'LOAD_LUNCH';

export const loadLunch = () => {
    return async dispatch => {
        try {
            
            const response = await fetch('https://richmond-school-app.firebaseio.com/lunch.json');
            
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const lunchData = await response.json();
            const newData = {};
            Object.keys(lunchData).forEach(key => newData[key] = lunchData[key])
            dispatch({type: LOAD_LUNCH, lunch: newData});
        } catch (err) {
            throw err;
        };
    };
};