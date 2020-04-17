import {LOAD_STAFF} from '../actions/staff';

const inititalState ={
    staffMembers: []
};

export default (state = inititalState, action) => {
    switch (action.type) {
        case LOAD_STAFF:
            return {
                ...state,
                staffMembers: action.staff
            };
        default: {
            return state;
        }
    }
}