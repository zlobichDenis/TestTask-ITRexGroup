import React from "react";
import PropTypes from 'prop-types';
import { Column } from "../column/column";

export const Row = (props) => {
    const { person, onChangeActivePerson } = props;

    const columnsOfPerson = Object.keys(person).map((key) => {
        const keyModifier = Math.random() * 10;
        if (key === 'adress') {
            return <Column key={`person${person[key].id + keyModifier}__${key}`} fieldValue={person[key].state} />
        } else if (key === 'description') {
            return undefined;
        }
        return <Column key={`person${person[key].id + keyModifier}__${key}`} fieldValue={person[key]} />
    });    

    return (
        <tbody>
            <tr onClick={onChangeActivePerson}>
                {columnsOfPerson}
            </tr>
        </tbody>
    )
}

Row.propTypes = {
    person: PropTypes.object.isRequired,
    onChangeActivePerson: PropTypes.func.isRequired,
}