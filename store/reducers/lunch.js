import { LOAD_LUNCH } from '../actions/lunch'

const intialState = {
    lunches: {}
};

export default (state = intialState, action) => {
    switch (action.type) {
        case LOAD_LUNCH: {
            return {
                lunches: action.lunch
            }
        };
        default: {
            return state;
        };
    }
}

