import { CHANGE_ACTIVE_FILTER } from "../actions/filter-actions";

export const activeFilterActionCreator = (value) => {
    return {
        type: CHANGE_ACTIVE_FILTER,
        value: value,   
    }
};