import { LOAD_EVENTS } from '../actions/events'

const intialState = {
    events: {}
};

export default (state = intialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS: {
            return {
                events: action.events
            }
        };
        default: {
            return state;
        };
    }
}