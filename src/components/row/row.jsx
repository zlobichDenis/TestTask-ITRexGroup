import React from "react";
import PropTypes from 'prop-types';
import Column from "../column/column";

export default class Row extends React.Component {
    constructor(props) {
        super(props);

        this.props = props
    }

    render() {
        const { person, onClick } = this.props;

        const columnsOfPerson = Object.keys(person).map((key) => {
            if (key === 'adress') {
                return <Column key={`person${person[key].id}__${key}`} value={person[key].state} />
            } else if (key === 'description') {
                return;
            }
            return <Column key={`person${person[key].id}__${key}`} value={person[key]} />
        });
        return (
            <tbody>
                <tr onClick={onClick}>
                    {columnsOfPerson}
                </tr>
            </tbody>
        )
    }
}

Row.propTypes = {
    person: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}