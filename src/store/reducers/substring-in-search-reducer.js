import { CHANGE_WANTED_SUBSTRING } from '../actions/substring-search-actions'

export const substringInSearchReducer = (state = '', action) => {
    switch (action.type) {
        case CHANGE_WANTED_SUBSTRING:
            return action.value;
        default: 
            return state;
    }
};