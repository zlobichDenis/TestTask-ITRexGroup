import { CHANGE_ACTIVE_PERSON } from "../actions/active-person-actions";

export const currentActivePersonReducer = (state = null, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_PERSON:
            return action.value;
        default: 
            return state;
    };
};