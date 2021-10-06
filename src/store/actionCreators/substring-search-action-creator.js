import { CHANGE_WANTED_SUBSTRING } from "../actions/substring-search-actions";

export const substringInSearchActionCreator = (value) => {
    return {
        type: CHANGE_WANTED_SUBSTRING,
        value,
    }
};