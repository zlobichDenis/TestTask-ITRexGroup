import React from "react";
import PropTypes from 'prop-types';
import Row from "../row/row";

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <table border="1">
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
                <Row />
            </table>
        )
    }
}