import { CHANGE_ACTIVE_PERSON } from "../actions/active-person-actions";

export const currentActivePersonActionCreator = (person) => {
    return {
        type: CHANGE_ACTIVE_PERSON,
        value: person,
    }
}