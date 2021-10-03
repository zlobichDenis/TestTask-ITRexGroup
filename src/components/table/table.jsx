import React from "react";
import PropTypes from 'prop-types';
import Row from "../row/row";

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndexOfData: 0,
        };

        this.props = props;
    }

    render() {
        const { data, onChangeActivePerson } = this.props;

        const rowsOfTable = data.map((person) => {
            const keyModifier = Math.random() * 10;
            return <Row onClick={() => onChangeActivePerson(person)} key={person.id + keyModifier} person={person}/>
        });

        return (
            <table style={{width:'100%', height: '400px'}} border="1">
                <thead>               
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>State</th>
                    </tr>
                </thead>
                {rowsOfTable}
            </table>
        )
    }
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeActivePerson: PropTypes.func.isRequired,
}